import console from "node:console";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(import.meta.dirname, "..");
const configPath = join(root, "src", "config", "site.ts");
const configSource = readFileSync(configPath, "utf8");
const blockers = {
  technical: [],
  publication: [],
  legal: [],
};
const errors = blockers.technical;

const has = (pattern) => pattern.test(configSource);
const requireValue = (label, pattern) => {
  if (!has(pattern)) errors.push(label);
};

if (has(/domainIsProvisional:\s*true/)) {
  errors.push("Le domaine est encore marqué comme provisoire.");
}
if (!has(/environment:\s*["']production["']/)) {
  errors.push("L’environnement public n’est pas marqué « production ».");
}
requireValue(
  "Le domaine doit être une URL HTTPS non vide.",
  /domain:\s*["']https:\/\/[^"']+["']/,
);
requireValue("Le nom du site est absent.", /name:\s*["'][^"']+["']/);
requireValue("La langue est absente.", /language:\s*["'][^"']+["']/);
requireValue("La locale est absente.", /locale:\s*["'][^"']+["']/);
requireValue(
  "Le téléphone centralisé n’a pas le format international attendu.",
  /phone:\s*["']\+\d{8,15}["']/,
);

for (const [field, label] of [
  ["legalName", "Le nom légal n’est pas validé."],
  ["legalStatus", "Le statut légal n’est pas validé."],
  ["legalAddress", "L’adresse légale n’est pas validée."],
]) {
  if (has(new RegExp(`${field}:\\s*null`))) blockers.legal.push(label);
}

if (has(/email:\s*null/)) {
  blockers.publication.push(
    "L’email public reste absent selon la politique interne de publication.",
  );
}

if (has(/openGraphImage:\s*null/)) {
  blockers.publication.push(
    "L’image Open Graph officielle n’est pas déclarée.",
  );
}

const requiredFiles = [
  [
    "src/pages/politique-confidentialite.astro",
    "La politique de confidentialité est absente.",
  ],
  ["src/pages/mentions-legales.astro", "Les mentions légales sont absentes."],
  ["public/favicon.svg", "Le favicon technique est absent."],
];

for (const [file, message] of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(message);
}

const robotsPath = join(root, "dist", "robots.txt");
if (
  existsSync(robotsPath) &&
  /User-agent:\s*\*[^]*Disallow:\s*\/(?:\r?\n|$)/i.test(
    readFileSync(robotsPath, "utf8"),
  )
) {
  errors.push("Le fichier robots.txt bloque encore l’indexation publique.");
}

const publicPages = join(root, "src", "pages");
for (const file of readdirSync(publicPages)) {
  if (file === "design-system.astro" || !file.endsWith(".astro")) continue;
  const source = readFileSync(join(publicPages, file), "utf8");
  if (
    /lorem ipsum|TODO|FIXME|localhost|bientôt disponible|à intégrer|placeholder/i.test(
      source,
    )
  ) {
    errors.push(
      `Contenu public provisoire interdit détecté dans src/pages/${file}.`,
    );
  }
}

const dist = join(root, "dist");
if (existsSync(dist)) {
  const generatedFiles = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory)) {
      const path = join(directory, entry);
      if (statSync(path).isDirectory()) visit(path);
      else generatedFiles.push(path);
    }
  };
  visit(dist);

  const htmlFiles = generatedFiles.filter((file) => extname(file) === ".html");
  const titles = new Map();
  const descriptions = new Map();
  const structuredDataRequired = new Map([
    ["index.html", ["WebSite", "Organization"]],
    ["solutions/index.html", ["BreadcrumbList", "Service"]],
    ["realisations/index.html", ["BreadcrumbList"]],
    ["methode/index.html", ["BreadcrumbList"]],
    ["a-propos/index.html", ["BreadcrumbList", "ProfilePage", "Person"]],
    ["contact/index.html", ["BreadcrumbList"]],
  ]);
  const forbiddenPublicNames = [
    "UnionCaisse",
    "Zamor",
    "Blex Academy",
    "CRM Invincibo GSM",
  ];

  const validateStructuredValue = (value, path, location) => {
    if (value === null || value === "") {
      errors.push(`Propriété JSON-LD vide dans ${location} : ${path}.`);
      return;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        errors.push(`Tableau JSON-LD vide dans ${location} : ${path}.`);
      }
      value.forEach((item, index) =>
        validateStructuredValue(item, `${path}[${index}]`, location),
      );
      return;
    }
    if (typeof value !== "object") return;
    if (Object.keys(value).length === 0) {
      errors.push(`Objet JSON-LD vide dans ${location} : ${path}.`);
    }
    for (const [key, child] of Object.entries(value)) {
      if (
        ["url", "item", "@id"].includes(key) &&
        typeof child === "string" &&
        !/^https:\/\/[^\s]+$/.test(child)
      ) {
        errors.push(
          `URL JSON-LD non absolue ou non HTTPS dans ${location} : ${path}.${key}.`,
        );
      }
      validateStructuredValue(child, `${path}.${key}`, location);
    }
  };
  const commercialPhrases = [
    "création de site web professionnel en haïti",
    "développeur web en haïti",
    "développement logiciel en haïti",
    "logiciel de gestion pour entreprise en haïti",
    "application web sur mesure en haïti",
    "automatisation d’entreprise en haïti",
    "automatisation des tâches répétitives",
    "crm sur mesure pour entreprise",
  ];

  for (const file of generatedFiles) {
    if (![".html", ".xml", ".txt", ".js", ".css"].includes(extname(file))) {
      continue;
    }
    if (/localhost|127\.0\.0\.1/.test(readFileSync(file, "utf8"))) {
      errors.push(`URL locale détectée dans ${relative(root, file)}.`);
    }
  }

  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf8");
    const location = relative(dist, file).replaceAll("\\", "/");
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(
      /<meta name="description" content="([^"]*)"/,
    )?.[1];
    const noindex = /<meta name="robots" content="noindex, nofollow"/.test(
      html,
    );
    const canonical = /<link rel="canonical" href="https:\/\/[^"]+"/.test(html);
    const h1Count = (html.match(/<h1[ >]/g) ?? []).length;

    if (title) {
      if (titles.has(title)) {
        errors.push(
          `Title dupliqué entre ${titles.get(title)} et ${location}.`,
        );
      } else titles.set(title, location);
    }
    if (description) {
      if (descriptions.has(description)) {
        errors.push(
          `Description dupliquée entre ${descriptions.get(description)} et ${location}.`,
        );
      } else descriptions.set(description, location);
    }
    if (!noindex && !canonical) {
      errors.push(`Page indexable sans canonical : ${location}.`);
    }
    if (h1Count !== 1) {
      errors.push(`La page ${location} contient ${h1Count} h1 au lieu d’un.`);
    }

    const jsonLdBlocks = [
      ...html.matchAll(
        /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
      ),
    ];
    if (jsonLdBlocks.length > 1) {
      errors.push(`Plusieurs blocs JSON-LD détectés dans ${location}.`);
    }
    const requiredTypes = structuredDataRequired.get(location) ?? [];
    if (requiredTypes.length > 0 && jsonLdBlocks.length !== 1) {
      errors.push(`Bloc JSON-LD requis absent dans ${location}.`);
    }
    for (const match of jsonLdBlocks) {
      try {
        const data = JSON.parse(match[1]);
        validateStructuredValue(data, "$", location);
        const serialized = JSON.stringify(data);
        for (const type of requiredTypes) {
          if (!serialized.includes(`"@type":"${type}"`)) {
            errors.push(`Type JSON-LD ${type} absent dans ${location}.`);
          }
        }
        for (const name of forbiddenPublicNames) {
          if (
            serialized
              .toLocaleLowerCase("fr")
              .includes(name.toLocaleLowerCase("fr"))
          ) {
            errors.push(
              `Nom interne anonymisé dans le JSON-LD de ${location} : ${name}.`,
            );
          }
        }
      } catch {
        errors.push(`JSON-LD invalide dans ${location}.`);
      }
    }

    const visibleText = html
      .replace(/<head[\s\S]*?<\/head>/i, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .toLocaleLowerCase("fr");
    for (const phrase of commercialPhrases) {
      const count = visibleText.split(phrase).length - 1;
      if (count > 3) {
        errors.push(
          `Répétition artificielle possible dans ${location} : « ${phrase} » (${count} fois).`,
        );
      }
    }

    for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
      const pathname = match[1].split("#")[0];
      if (!pathname) continue;
      const target =
        pathname === "/"
          ? join(dist, "index.html")
          : pathname.endsWith("/")
            ? join(dist, pathname, "index.html")
            : join(dist, pathname);
      if (!existsSync(target)) {
        errors.push(`Lien interne cassé dans ${location} : ${match[1]}.`);
      }
    }
  }
}

const totalBlockers = Object.values(blockers).reduce(
  (total, group) => total + group.length,
  0,
);

if (totalBlockers) {
  console.error("Validation production refusée :");
  for (const [category, messages] of Object.entries(blockers)) {
    if (messages.length === 0) continue;
    const headings = {
      technical: "Blocages techniques",
      publication: "Blocages internes de publication",
      legal: "Éléments à confirmer juridiquement",
    };
    console.error(`\n${headings[category]} :`);
    messages.forEach((error) => console.error(`- ${error}`));
  }
  console.error(
    `\n${totalBlockers} blocage(s) à résoudre avant un déploiement officiel.`,
  );
  process.exit(1);
}

console.log("Validation production réussie : aucun blocage critique détecté.");

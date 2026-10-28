export const siteConfig = {
  name: "Laveniel Séjour",
  legalName: null,
  description:
    "Laveniel Séjour, développeur web en Haïti. Logiciels pour boutiques, ateliers GSM et caisses d’épargne : argent, stock et clients, mis en production pour de vrais commerces.",
  footerDescription:
    "Développeur web en Haïti. Logiciels pour boutiques, ateliers GSM et caisses d’épargne.",
  slogan: "Des logiciels de gestion construits pour le terrain.",
  domain: "https://lavenielsejour.com",
  domainIsProvisional: false,
  environment: "production",
  locale: "fr-HT",
  language: "fr",
  legalStatus: null,
  legalAddress: null,
  phone: "+50936896407",
  whatsapp: "50936896407",
  email: "contact@lavenielsejour.com",
  socialLinks: {
    github: "https://github.com/Invincibo-dev",
    facebook: "https://www.facebook.com/laveniel.sejour.2025",
    youtube: "https://www.youtube.com/@blex.academy",
  },
  assets: {
    favicon: "/favicon.svg",
    openGraphImage: "/og-image.png",
  },
  founder: {
    name: "Laveniel Séjour",
    role: "Développeur web et entrepreneur",
    photo: "/images/laveniel-sejour.webp",
    shortBio:
      "Je construis des solutions numériques à partir de problèmes opérationnels réels.",
  },
  contact: {
    primaryChannel: "whatsapp",
    whatsappLabel: "WhatsApp",
    responseTimeNote: null,
    messages: {
      generic: "Bonjour Laveniel, je viens de voir ton portfolio.",
      project: "Bonjour Laveniel, je voudrais te parler d’un projet.",
    },
  },
} as const;

export const publicRoutes = ["/"] as const;

export const provisionalLegalRoutes = [
  "/politique-confidentialite/",
  "/mentions-legales/",
] as const;

export const mainNavigation = [
  { label: "Projets", href: "/#projets" },
  { label: "Façon de travailler", href: "/#travail" },
  { label: "Contact", href: "/#contact" },
] as const;

export function createWhatsAppUrl(message?: string): string {
  const url = new URL(`https://wa.me/${siteConfig.whatsapp}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
}

export function formatPhoneForDisplay(phone: string): string {
  const match = phone.match(/^(\+\d{3})(\d{4})(\d{4})$/);

  return match ? `${match[1]} ${match[2]}-${match[3]}` : phone;
}

# Architecture technique envisagée

> Ce document prépare la phase technique sans initialiser l’application. Les choix restent à confirmer avant leur mise en œuvre.

## Choix d’Astro

Astro est adapté à un site commercial riche en contenu : il génère des pages rapides et faciles à référencer, permet d’utiliser des composants lorsque nécessaire et limite le JavaScript envoyé au navigateur. Le site doit rester majoritairement statique afin de réduire la complexité, les coûts d’hébergement, la maintenance et les risques de sécurité.

## Structure cible indicative

```text
public/
  images/
    brand/
    projects/
    founder/

src/
  components/
    common/
    home/
    projects/
    forms/
  content/
    projects/
    services/
  layouts/
  pages/
    projets/
  config/
    site.ts
  styles/
  utils/

docs/
```

Cette structure ne devra être créée qu’au fur et à mesure des besoins réels.

## Organisation des composants

- `common` regroupera les éléments réellement partagés, comme la navigation et le pied de page ;
- `home` contiendra les sections propres à l’accueil ;
- `projects` portera les présentations et cartes de réalisations ;
- `forms` sera réservé aux éléments du futur formulaire ;
- les layouts centraliseront la structure de page, les métadonnées communes et les éléments globaux.

Un composant ne doit être extrait que s’il améliore clairement la réutilisation, la lisibilité ou les tests.

## Contenu structuré

Les études de cas pourront être stockées dans `src/content/projects` en Markdown ou MDX avec un schéma validant leurs métadonnées : titre, résumé, statut de publication, image autorisée et informations SEO. Markdown convient au contenu éditorial courant ; MDX ne sera utilisé que lorsqu’un composant interactif ou une mise en page spécifique le justifie. Les services pourront suivre le même principe si leur volume le nécessite.

## Configuration centralisée

Les informations globales devront avoir une source unique, par exemple :

```ts
export const siteConfig = {
  name: "Invincibo Digital",
  domain: "https://invincibodigital.com",
  phone: "+50936896407",
  whatsapp: "50936896407",
  locale: "fr-HT",
};
```

Cet extrait est seulement un exemple d’architecture : `src/config/site.ts` ne doit pas être créé pendant la phase de fondation. Le domaine est envisagé, mais son achat et sa configuration ne sont pas présumés.

## SEO

Chaque page devra disposer d’un titre et d’une description uniques, d’une URL canonique, de métadonnées Open Graph et, lorsque pertinent, de données structurées véridiques. Un composant ou layout commun devra garantir la cohérence. La phase technique prévoira également un sitemap, un fichier robots et la langue `fr-HT`.

La mise en œuvre actuelle centralise ces métadonnées dans `BaseLayout`. Les endpoints statiques `/sitemap.xml` et `/robots.txt` utilisent `siteConfig` afin de rester cohérents avec le domaine et son statut provisoire. Le script `scripts/validate-production.mjs` contrôle les prérequis stricts sans bloquer le build local.

## Images

Les images seront classées par marque, projet et fondateur. Seuls les fichiers autorisés seront publiés. Les formats modernes, dimensions adaptées, textes alternatifs utiles et chargement différé limiteront le poids des pages. Les captures devront masquer les informations confidentielles et personnelles.

## Formulaire de contact

Le premier site pourra fonctionner avec un lien WhatsApp et un formulaire relié ultérieurement à un service léger ou à une fonction serveur. Le fournisseur sera choisi selon la protection anti-spam, la confidentialité, la fiabilité et la portabilité. Aucun backend complexe n’est prévu sans validation.

## Déploiement et portabilité

La génération statique doit permettre un déploiement sur Hostinger, Cloudflare Pages ou Vercel. Les fonctionnalités propres à une plateforme seront évitées sauf bénéfice démontré. La configuration de construction, les variables d’environnement documentées et les sorties statiques devront rester standards afin de pouvoir changer d’hébergeur sans réécriture importante.

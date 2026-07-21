# Invincibo Digital

Invincibo Digital est le projet de site commercial officiel d’une activité de solutions logicielles et de transformation numérique. Le site présentera les problèmes métier résolus, valorisera des réalisations vérifiables et facilitera les demandes de devis, notamment par WhatsApp.

L’activité vise le développement de logiciels de gestion, d’applications web métier et d’automatisations pour les PME et entreprises, principalement en Haïti, avec une possible extension internationale.

Slogan provisoire : « Des logiciels conçus pour faire avancer votre entreprise. »

## Statut

**Phase 3A — Structure commerciale principale.** La page d’accueil commerciale, le header responsive, le footer, les composants associés et les emplacements réservés aux visuels validés sont en place. Les pages internes et les études de cas complètes ne sont pas encore développées.

État des principaux jalons :

- fondation technique terminée ;
- design system léger terminé ;
- page d’accueil commerciale initiale terminée ;
- pages internes et contenus détaillés restant à développer.

Le nom, le domaine `invincibodigital.com`, l’identité visuelle et certaines informations commerciales restent provisoires jusqu’à validation.

## Prérequis

- Node.js 22.12 ou version ultérieure compatible ;
- npm 9.6.5 ou version ultérieure.

## Installation

```sh
npm install
npm run dev
```

Le serveur de développement indique l’adresse locale à ouvrir dans le navigateur.

## Commandes

| Commande               | Usage                                            |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Démarrer le serveur de développement             |
| `npm run build`        | Générer le site de production dans `dist/`       |
| `npm run preview`      | Prévisualiser le build localement                |
| `npm run check`        | Vérifier Astro et TypeScript                     |
| `npm run lint`         | Analyser la qualité du code                      |
| `npm run format`       | Formater les fichiers pris en charge             |
| `npm run format:check` | Vérifier le formatage sans modifier les fichiers |

## Architecture

- `public/images/` : images de marque, de projets et du fondateur ;
- `src/components/` : futurs composants regroupés par responsabilité ;
- `src/content/` et `src/content.config.ts` : collections de projets et services ;
- `src/config/site.ts` : source unique des informations publiques globales ;
- `src/layouts/` : fondations HTML partagées ;
- `src/pages/` : routes du site ;
- `src/styles/` : styles globaux et intégration Tailwind ;
- `src/utils/` : futurs utilitaires réellement partagés.

## Configuration

Le nom, le domaine, le téléphone, WhatsApp et les autres informations publiques globales doivent être modifiés uniquement dans `src/config/site.ts`. Le domaine y est explicitement marqué comme provisoire. Aucun secret ne doit être ajouté à ce fichier ou au dépôt ; les futures variables sensibles devront être documentées sans valeur réelle dans `.env.example`.

## Documentation

- [Identité de marque](docs/BRAND.md)
- [Architecture éditoriale](docs/CONTENT.md)
- [Architecture technique](docs/ARCHITECTURE.md)
- [Design system léger](docs/DESIGN_SYSTEM.md)
- [Page d’accueil commerciale](docs/HOMEPAGE.md)
- [Feuille de route](docs/ROADMAP.md)
- [Règles pour les agents](AGENTS.md)

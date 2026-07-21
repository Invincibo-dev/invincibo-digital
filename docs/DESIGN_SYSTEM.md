# Design system léger

> Cette fondation visuelle est provisoire. Elle doit être validée dans des conditions réelles avant le développement commercial complet.

## Direction

Le thème sombre principal doit transmettre sérieux, confiance, clarté et maîtrise technique, sans codes visuels de cryptomonnaie, de gaming ou d’agence IA générique. Les effets restent sobres et le contenu conserve la priorité.

## Palette

Les tokens sont définis une seule fois dans `src/styles/global.css` et exposés aux utilitaires Tailwind 4 avec `@theme inline`.

| Usage            | Token                      | Valeur provisoire |
| ---------------- | -------------------------- | ----------------- |
| Fond             | `--color-bg`               | `#07111f`         |
| Surface          | `--color-surface`          | `#0d1b2a`         |
| Surface élevée   | `--color-surface-elevated` | `#13263a`         |
| Texte            | `--color-text`             | `#f8fafc`         |
| Texte secondaire | `--color-text-muted`       | `#b3b7bf`         |
| Action           | `--color-primary`          | `#176fba`         |
| Survol d’action  | `--color-primary-hover`    | `#125a98`         |
| Action douce     | `--color-primary-soft`     | `#112f4d`         |
| Accent limité    | `--color-accent`           | `#d9a928`         |
| Bordure          | `--color-border`           | `#26384c`         |
| Focus            | `--color-focus`            | `#60a5fa`         |

Les états succès, avertissement et danger possèdent également des tokens. La couleur ne doit jamais être le seul moyen de transmettre une information.

## Typographie

La pile système commence par Inter si elle est déjà installée, puis utilise les polices sans-serif du système. Aucune police distante n’est chargée. L’échelle comprend affichage, `h1`, `h2`, `h3`, texte large, texte courant, petit texte, label et code. Les titres utilisent `clamp()` avec des limites adaptées au mobile ; les paragraphes sont limités à `68ch`.

## Espacements et surfaces

- espacements : `xs`, `sm`, `md`, `lg`, `xl`, `2xl` et `section` ;
- conteneur : maximum `75rem` (1200 px), avec gouttières fluides ;
- rayons : `sm`, `md`, `lg` ;
- ombres : `sm` et `md`, à réserver aux surfaces qui nécessitent une séparation.

## Composants

- `Container` : largeur et gouttières responsives ;
- `Section` : variantes `default`, `surface`, `elevated` ;
- `ButtonLink` : variantes `primary`, `secondary`, `ghost` et tailles `sm`, `md`, `lg` ;
- `Badge` : variantes `neutral`, `primary`, `accent`, `success` ;
- `SectionHeading` : eyebrow, description, alignement et niveaux `h1` à `h3` ;
- `Card` : surface standard ou état interactif facultatif ;
- `Icon` : six SVG locaux, décoratifs par défaut et titrables si nécessaire.
- `SiteHeader` : identité textuelle, navigation responsive et menu mobile accessible ;
- `SiteFooter` : description, navigation utile et coordonnées centralisées.

Les composants propres à l’accueil utilisent ces fondations pour les problèmes, solutions, étapes, réalisations, aperçu conceptuel et présentation du fondateur. Les cadres réservés aux futurs visuels doivent rester explicitement identifiés jusqu’à l’ajout d’images autorisées.

Le header utilise le token `--header-height`. Les navigations par ancre doivent employer `--anchor-offset`, appliqué globalement avec `scroll-padding-top` et `scroll-margin-top`, afin que les titres ciblés restent visibles sous le header sticky. Il ne faut pas définir de décalage différent dans chaque section.

La page `/design-system/` présente ces éléments et porte une directive `noindex, nofollow`.

## Formulaires et accessibilité

Les styles couvrent labels, aide, erreur, désactivation, `input`, `textarea` et `select`, sans formulaire connecté. Chaque champ doit conserver un label explicite et relier ses messages avec `aria-describedby`. Les zones interactives visent au moins 44 px de hauteur, le focus clavier est visible, les SVG décoratifs sont masqués et `prefers-reduced-motion` est respecté.

Ces mesures ne constituent pas une revendication de conformité WCAG complète ; un audit spécialisé restera nécessaire.

## Règles d’utilisation

- employer les tokens sémantiques plutôt que des couleurs codées dans les composants ;
- réserver le bleu aux actions principales et le doré à de rares accents ;
- préserver une hiérarchie de titres logique ;
- éviter les textes longs en majuscules, les glows, les ombres lourdes et les gradients systématiques ;
- ne pas rendre une carte entière cliquable sans structure accessible ;
- ne pas ajouter une nouvelle variante sans besoin récurrent démontré.

## Éléments restant provisoires

La palette exacte, le choix typographique final, les rayons, les ombres et les densités devront être validés. Une palette claire pourra être ajoutée ultérieurement si un besoin réel apparaît ; aucun changement de thème n’est prévu actuellement.

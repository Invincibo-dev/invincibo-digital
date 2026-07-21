# Règles de contribution pour les agents Codex

Ces règles s’appliquent à l’ensemble du dépôt.

## Avant toute intervention

1. Lire intégralement le [README](README.md) et les documents de [`docs`](docs/).
2. Inspecter l’état du dépôt et le contenu des fichiers concernés avant toute modification.
3. Distinguer clairement les décisions validées des propositions provisoires.

## Modifications et architecture

- Ne jamais supprimer ni réécrire massivement du contenu sans justification explicite.
- Préserver les changements existants et limiter chaque intervention au périmètre demandé.
- Utiliser TypeScript en mode strict après l’initialisation technique.
- Privilégier une architecture simple et éviter toute surarchitecture.
- N’ajouter aucune dépendance sans nécessité démontrée.
- Centraliser la configuration globale. Le téléphone, le domaine, les liens sociaux et les informations de marque ne doivent pas être répétés dans plusieurs composants.
- Prévoir, lors de l’initialisation, une source unique telle que `src/config/site.ts`.
- Concevoir les interfaces selon une approche mobile-first, accessible et performante.
- Ne pas ajouter de chatbot IA, tableau de bord d’administration, authentification ou backend sans validation explicite.

## Sécurité, confidentialité et intégrité

- Ne jamais modifier un secret ou une variable d’environnement réelle.
- Ne jamais inscrire de secret directement dans le dépôt.
- Ne jamais inventer de témoignage, statistique, client, résultat ou donnée commerciale.
- Ne pas exposer de donnée confidentielle provenant d’un projet client.
- Ne jamais modifier un logo officiel sans validation.

## Qualité et compte rendu

- Exécuter toutes les vérifications disponibles et pertinentes avant de conclure.
- À la fin de chaque intervention, fournir un résumé des fichiers modifiés, des décisions prises, des vérifications exécutées et des points restant à valider.
- Si une vérification ne peut pas être exécutée, l’indiquer clairement.

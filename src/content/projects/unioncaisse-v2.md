---
title: UnionCaisse
slug: unioncaisse-v2
summary: "Le système de gestion d’une caisse d’épargne de type tontine : agents sur le terrain, dépôts, retraits et participations de chaque client."
published: true
order: 2
caseStudyReady: false
category: Caisse d’épargne
visibility: public
clientNameIsPublic: true
challenge: "Les agents collectent l’argent des clients sur le terrain. Chaque dépôt et chaque retrait doit être tracé, et chaque agent reste responsable de ses propres clients."
solution: "Un système où l’admin, le manager et les agents ont chacun leurs droits, leur caisse et leurs rapports. Chaque client a sa participation, avec ses dates de début et de fin."
capabilities:
  - Rôles admin, manager et agents
  - Chaque agent ne voit que ses clients
  - Espace client pour suivre son épargne
technologies:
  - Node.js et Express
  - MySQL
  - Authentification JWT
coverImage: /projects/unioncaisse.webp
coverImageAlt: "Tableau de bord administrateur d’UnionCaisse, montants et effectifs floutés"
contribution: Conçu et développé seul.
featured: true
statusLabel: En production
confidentialityNote: Les données des clients et les montants ne sont jamais montrés.
---

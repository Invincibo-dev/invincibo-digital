# Stratégie SEO commerciale et sémantique

## Objectifs

Le référencement doit construire une visibilité de marque autour d’Invincibo Digital et de Laveniel Séjour, puis attirer des entreprises qui cherchent à mieux organiser leurs opérations en Haïti. Chaque page répond à une intention principale : les expressions ci-dessous guident l’architecture et ne doivent pas être répétées artificiellement.

## Visibilité de marque

| Requête           | Intention                                         | Page cible   | Contenu nécessaire                                                             | Entité                                            | Profils externes après validation                          |
| ----------------- | ------------------------------------------------- | ------------ | ------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------- |
| Laveniel Séjour   | Identifier le fondateur, son rôle et son activité | `/a-propos/` | Présentation vérifiable, rôle, approche et lien avec la marque                 | Person                                            | Harmoniser seulement des profils officiels confirmés       |
| Laveniel Sejour   | Même recherche sans accent                        | `/a-propos/` | Orthographe officielle dans la page ; observer la variante dans Search Console | Person                                            | Même identité et même URL que la forme accentuée           |
| Invincibo         | Identifier la marque mère ou l’écosystème         | `/`          | Relation prudente avec Invincibo Digital                                       | Organization, sous réserve du statut de la marque | Aucun profil ajouté sans validation                        |
| Invincibo Digital | Trouver l’activité, les offres et le contact      | `/`          | Proposition de valeur, solutions, preuves, méthode et contact                  | Organization et WebSite                           | Nom, description, domaine et coordonnées cohérents partout |
| Invincibo GSM     | Comprendre sa relation avec Laveniel ou Invincibo | À déterminer | Relation publique et autorisation à confirmer avant publication                | Aucune entité reliée actuellement                 | Ne pas harmoniser ni déclarer de relation avant validation |

`sameAs` reste absent tant qu’aucun profil officiel n’est validé. La relation d’Invincibo GSM avec Invincibo Digital n’est pas déclarée dans les données structurées.

## Visibilité commerciale

| Requête                                      | Intention                         | Cible actuelle                             | Future page                                                        | CTA                                   | Liens internes attendus                               | Priorité  |
| -------------------------------------------- | --------------------------------- | ------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------- | ----------------------------------------------------- | --------- |
| création de site web professionnel en Haïti  | Commerciale                       | Aucune page dédiée                         | `/creation-site-web-haiti/`, après validation de l’offre           | Discuter du site et de ses objectifs  | Solutions, réalisations pertinentes, méthode, contact | À valider |
| développeur web en Haïti                     | Commerciale et de marque          | `/a-propos/` répond seulement à l’identité | Page dédiée à décider selon l’offre validée                        | Présenter le besoin                   | À propos, solutions, réalisations, contact            | Moyenne   |
| développement logiciel en Haïti              | Commerciale                       | `/solutions/` comme vue générale           | `/developpement-logiciel-haiti/`                                   | Discuter du logiciel                  | Solutions, réalisations, méthode, contact             | Haute     |
| logiciel de gestion pour entreprise en Haïti | Commerciale                       | `/solutions/`                              | `/logiciel-gestion-entreprise-haiti/`                              | Présenter les opérations à gérer      | Solutions, réalisation pertinente, méthode, contact   | Haute     |
| logiciel de gestion sur mesure en Haïti      | Commerciale                       | `/solutions/`                              | Même page que la requête précédente pour éviter la cannibalisation | Présenter les règles métier           | Solutions, réalisation pertinente, méthode, contact   | Haute     |
| application web sur mesure en Haïti          | Commerciale                       | `/solutions/`                              | `/application-web-sur-mesure-haiti/`                               | Discuter de l’application métier      | Solutions, réalisations, méthode, contact             | Haute     |
| automatisation d’entreprise en Haïti         | Commerciale                       | `/solutions/`                              | `/automatisation-entreprise-haiti/`                                | Identifier les opérations répétitives | Solutions, méthode, contact                           | Haute     |
| automatisation des tâches répétitives        | Informationnelle puis commerciale | `/solutions/`                              | Article de cadrage relié à la page automatisation                  | Décrire une tâche répétitive          | Article, solution automatisation, méthode, contact    | Moyenne   |
| CRM sur mesure pour entreprise               | Commerciale                       | `/solutions/`                              | Page dédiée seulement si l’offre et la demande le justifient       | Discuter du suivi client              | Solutions, réalisation autorisée, méthode, contact    | Moyenne   |

## Décision commerciale à valider : création de sites web

Invincibo Digital souhaite proposer officiellement la création de sites web professionnels pour entreprises, mais cette intention doit encore être validée comme offre publique avant de modifier le positionnement du site. La future route `/creation-site-web-haiti/` visera les entreprises recherchant crédibilité, présentation de services, demandes de contact, visibilité en ligne et un site rapide, mobile et professionnel. Elle n’est ni construite ni ajoutée au sitemap pendant la Phase 4A.

## Matrice des pages publiques actuelles

| Route            | Title                                                       | Description                                                                 | H1                                                                    | Intention principale               | Cible                | Canonical        | JSON-LD                             |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------- | -------------------- | ---------------- | ----------------------------------- |
| `/`              | Invincibo Digital                                           | Transformation d’opérations dispersées en systèmes numériques               | Transformer les opérations manuelles en système clair                 | Présenter la marque et l’offre     | Invincibo Digital    | `/`              | WebSite, Organization               |
| `/solutions/`    | Solutions logicielles pour entreprises \| Invincibo Digital | Logiciels de gestion, applications métier, automatisations et modernisation | Des systèmes conçus autour du fonctionnement réel de votre entreprise | Explorer les familles de solutions | Commerciale générale | `/solutions/`    | BreadcrumbList, Service × 4         |
| `/realisations/` | Réalisations logicielles \| Invincibo Digital               | Projets publics anonymisés et capacités démontrées                          | Des systèmes construits autour de besoins opérationnels réels         | Apporter une preuve prudente       | Preuve commerciale   | `/realisations/` | BreadcrumbList                      |
| `/methode/`      | Méthode de travail \| Invincibo Digital                     | Étapes de cadrage, conception et livraison                                  | Comprendre avant de construire                                        | Expliquer le processus             | Réassurance          | `/methode/`      | BreadcrumbList                      |
| `/a-propos/`     | Laveniel Séjour — À propos \| Invincibo Digital             | Fondateur, rôle, Haïti et approche d’Invincibo Digital                      | Construire des solutions utiles, pas seulement du code                | Identifier le fondateur            | Laveniel Séjour      | `/a-propos/`     | BreadcrumbList, ProfilePage, Person |
| `/contact/`      | Contact \| Invincibo Digital                                | Qualification et démarrage d’une discussion de projet                       | Parlons du fonctionnement réel de votre entreprise                    | Convertir une intention qualifiée  | Contact / conversion | `/contact/`      | BreadcrumbList                      |

Les titres, descriptions et H1 sont uniques. L’accueil porte la marque, Solutions les familles d’offres, Réalisations la preuve, Méthode le processus, À propos l’entité Laveniel Séjour et Contact la conversion. Cette séparation ne révèle aucune cannibalisation évidente.

## Risques de cannibalisation

- réserver l’accueil à la marque et à la proposition de valeur générale ;
- conserver Solutions comme page mère sans lui faire cibler toutes les variantes géographiques ;
- regrouper « logiciel de gestion » et « logiciel de gestion sur mesure » sur une seule future page ;
- attribuer une intention distincte à chaque page Haïti ;
- ne créer une page CRM ou développeur web que si elle répond à une offre et un besoin distincts ;
- utiliser des canoniques autonomes et fusionner les contenus qui répondent à la même intention.

## Liens internes

L’audit du rendu confirme : accueil vers Solutions, Réalisations, Méthode, À propos et Contact ; Solutions vers Réalisations, Méthode et Contact ; Réalisations vers Solutions et Contact ; Méthode vers Réalisations et Contact ; À propos vers Solutions, Réalisations, Méthode et Contact. Les ancres décrivent leur destination et aucune n’utilise « cliquez ici ».

Les futures pages spécialisées auront Solutions comme parent éditorial et renverront naturellement vers une réalisation pertinente, Méthode et Contact. Les futurs articles relieront un problème à une seule page commerciale prioritaire sans multiplier les liens ou les ancres exactes.

## Plan de contenu futur

- quand remplacer Excel ou des cahiers par un logiciel de gestion ;
- cadrer une application métier sans cahier des charges complet ;
- automatiser une tâche répétitive sans fragiliser le processus ;
- choisir entre outil existant et développement sur mesure ;
- permissions, responsabilités et traçabilité dans un logiciel de gestion ;
- moderniser un système existant sans perdre les opérations essentielles ;
- préparer les données avant un projet CRM ;
- préparer le contenu et les objectifs d’un site professionnel, si l’offre est validée.

## Mesure après déploiement

Après validation du domaine et déploiement, connecter manuellement le domaine à Google Search Console, soumettre `/sitemap.xml`, inspecter les six URLs publiques et suivre leur couverture d’indexation. Aucun code Search Console ou Google Analytics n’est ajouté pendant 4A.

KPI à suivre : requêtes, impressions, clics et position moyenne ; résultats par requête de marque et commerciale ; pages d’entrée organiques ; clics WhatsApp issus du trafic organique ; prospects qualifiés issus du SEO ; erreurs d’indexation et de sitemap ; pages orphelines. La mesure des clics ou conversions ne sera ajoutée qu’après choix d’un outil respectueux de la confidentialité et mise à jour des documents concernés.

## Limite des validations locales

Le validateur local contrôle la syntaxe et des règles internes simples sur les métadonnées, URLs et données structurées. Il ne remplace ni le Rich Results Test, ni Schema Markup Validator, ni l’interprétation réelle de Google après déploiement.

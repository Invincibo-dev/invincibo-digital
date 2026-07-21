# Page Réalisations

## Objectif commercial

La page `/realisations/` démontre la capacité d’Invincibo Digital à concevoir des systèmes liés à des besoins opérationnels concrets. Elle présente les problèmes traités, les réponses conçues et les principes de rigueur sans inventer de résultat ni exposer d’information sensible.

## Politique de confidentialité

Une réalisation n’apparaît que si `published` vaut `true` et si `visibility` vaut `public` ou `anonymized`. Une entrée `private` est toujours exclue du site public. En mode `anonymized`, le rendu emploie `publicTitle` et ne révèle ni le titre interne ni le nom du client.

La fonction `getPublicProjectTitle` applique cette règle dans les composants de l’accueil et du catalogue. Elle bloque le rendu d’une entrée privée et lève une erreur si un projet anonymisé ne possède pas de `publicTitle` non vide.

Les données personnelles, coordonnées, transactions, soldes, accès, URLs privées, configurations de communication, secrets, captures non autorisées et détails de sécurité restent interdits.

## Structure de la page

1. hero compact et aperçu conceptuel des familles de systèmes ;
2. principes de sélection et de confidentialité ;
3. catalogue des projets publics ou anonymisés ;
4. quatre familles de systèmes ;
5. principes génériques de rigueur ;
6. conditions nécessaires avant une étude de cas ;
7. appel à l’action WhatsApp.

## Règles de visibilité

- `public` : le titre du projet peut être affiché ;
- `anonymized` : seul l’intitulé public générique est affiché ;
- `private` : aucune présence dans le rendu public ;
- `caseStudyReady: false` : aucun lien vers une page individuelle ;
- trois capacités maximum sont affichées par réalisation.

## Contenu autorisé par projet

- **UnionCaisse V2, anonymisé :** gestion de caisse, épargne, rôles, permissions, historique, traçabilité et contrôle ;
- **Zamor Manager, anonymisé :** ventes, stock, réparations et clients ;
- **Blex Academy, anonymisé :** étudiants, modules, examens et progression ;
- **CRM Invincibo GSM, anonymisé :** prospects, étudiants, clients, tâches et accompagnements.

Les quatre titres internes restent dans la collection pour la gestion éditoriale, mais ne sont pas rendus dans le catalogue tant que leur publication nominative n’est pas confirmée.

## Contenu interdit

- nom de client ou marque sans autorisation ;
- donnée financière, personnelle ou opérationnelle réelle ;
- capture non validée ;
- résultat, statistique, délai ou témoignage non vérifié ;
- technologie utilisée comme preuve ou automatiquement rendue publique ;
- statut contractuel et architecture de sécurité détaillée.

## CTA

Les projets sans étude de cas prête proposent « Discuter d’un projet similaire » et ouvrent un échange WhatsApp contextualisé par leur intitulé public. Aucun lien ne mène vers une page individuelle inexistante. Les rubriques « Besoin traité » et « Réponse conçue » ne sont rendues que lorsque leur contenu existe réellement.

## Critères pour publier une étude de cas

- autorisation explicite de publication ;
- anonymisation terminée si nécessaire ;
- captures sélectionnées et validées ;
- données visibles contrôlées ;
- problème et solution relus ;
- résultats vérifiables disponibles, s’ils sont mentionnés.

## Éléments restant à valider

- autorisation d’afficher les noms internes des quatre projets ;
- identité des clients éventuellement publiables ;
- captures publiques ;
- résultats vérifiables ;
- contenu et route de chaque future étude de cas.

# Page Contact

## Objectif commercial

La route `/contact/` aide un prospect à présenter un besoin concret, à choisir un sujet de discussion et à comprendre la suite possible du premier échange. Elle ne présume ni de l’acceptation du projet ni de la solution à construire.

## Canal public

WhatsApp est le seul canal public validé. Son numéro technique et sa présentation lisible proviennent de `src/config/site.ts`. Aucun email, horaire, délai de réponse, adresse physique ou réseau social n’est affiché sans validation.

## Structure

1. hero compact et aperçu du premier échange ;
2. informations utiles avant d’écrire ;
3. quatre sujets de discussion ;
4. exemple générique de premier message ;
5. quatre étapes possibles après réception ;
6. règles de partage des informations sensibles ;
7. canal public et numéro lisible ;
8. FAQ native ;
9. appel à l’action final.

## Messages WhatsApp

Les messages génériques et de demande de projet sont centralisés dans `siteConfig.contact.messages`. Les quatre sujets utilisent des formulations propres à leur contexte et passent tous par `createWhatsAppUrl`. Le numéro n’est jamais inscrit dans les composants ou les pages.

## Qualification

Le premier message peut préciser l’activité, les opérations, la difficulté principale, les personnes concernées, les outils actuels, l’objectif et la priorité. Un cahier des charges complet ou un choix technique préalable ne sont pas requis. Tous les projets ne nécessitent pas un développement sur mesure et tous ne sont pas automatiquement acceptés.

## Confidentialité

Le prospect est invité à ne transmettre aucun mot de passe, clé API, fichier client complet ou renseignement financier sensible dans le premier message. Les éléments confidentiels doivent être échangés uniquement dans un cadre approprié au projet. Cette consigne ne constitue pas une promesse juridique.

## Formulaire

Aucun formulaire public n’est rendu pendant cette phase. Un formulaire non connecté créerait une attente trompeuse ; son intégration reste conditionnée au choix et à la validation d’un service de traitement adapté.

## Contenu interdit et éléments provisoires

Aucun email, adresse, horaire fixe, délai garanti, équipe commerciale, numéro secondaire, prix, devis automatique, CRM, réservation ou engagement contractuel ne doit être inventé. Les futurs canaux, le formulaire connecté et les modalités de traitement restent à valider.

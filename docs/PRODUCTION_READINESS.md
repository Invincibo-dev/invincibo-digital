# Préparation production

## État actuel

Le site est généré statiquement et les six pages commerciales sont construites. La Phase 4A prépare les contrôles, les métadonnées, les routes techniques et les documents nécessaires, sans effectuer de déploiement.

## Éléments prêts

- titres, descriptions, canonical et Open Graph textuel centralisés par `BaseLayout` ;
- données structurées WebSite, Organization, Person, ProfilePage, Service et BreadcrumbList ;
- sitemap limité aux six pages commerciales indexables ;
- robots généré depuis la configuration centrale ;
- favicon SVG technique provisoire ;
- pages légales provisoires et page 404 ;
- lien d’évitement, focus visible et réduction des mouvements ;
- build statique sans framework client, police distante, image lourde ou script tiers ;
- garde-fou `npm run validate:production`.

## Classification des blocages avant production

### Blocages techniques

- confirmer le domaine et mettre `domainIsProvisional` à `false` ;
- passer `environment` à `production` seulement au moment validé ;
- vérifier que `robots.txt` autorise alors l’indexation ;
- conserver les routes essentielles, canonical et assets déclarés valides ;
- confirmer que le favicon technique peut être publié ou le remplacer.

### Blocages internes de publication

- créer et valider une image Open Graph de 1200 × 630 px ;
- décider si un email public est requis par la politique commerciale du projet ;
- faire relire et compléter les pages légales provisoires ;
- choisir l’hébergement et configurer les en-têtes de sécurité ;
- effectuer un audit manuel final sur les navigateurs et appareils cibles.

### Éléments à confirmer juridiquement

- confirmer le nom légal, le statut légal et l’adresse légale applicables ;
- déterminer avec une personne compétente les obligations exactes des mentions légales selon l’activité, le lieu d’établissement et le marché visé.

Le validateur peut bloquer ces éléments selon la politique interne de publication du projet. Ses messages ne constituent pas une affirmation selon laquelle chaque champ serait une obligation légale universelle.

## Domaine, robots et sitemap

Le domaine `https://invincibodigital.com` reste provisoire. Dans cet état, `/robots.txt` bloque l’exploration générale afin d’éviter une indexation accidentelle. Après validation du domaine, la génération autorisera les pages publiques et continuera d’exclure le design system et les pages légales incomplètes. `/sitemap.xml` contient uniquement les six routes commerciales.

## Pages et informations légales

La politique de confidentialité et les mentions légales sont visibles depuis le footer mais portent `noindex, nofollow` et indiquent leur caractère incomplet. Elles n’inventent ni raison sociale, adresse, identifiant fiscal, email, hébergeur ni responsable juridique.

## Open Graph et favicon

Aucune image Open Graph n’est déclarée. Le partage utilise uniquement le titre, la description, l’URL, la locale et le nom du site. Une image officielle doit être ajoutée avant le déploiement. `public/favicon.svg` est une icône technique « ID », pas un logo officiel.

## Visibilité commerciale

`SEO_STRATEGY.md` distingue les requêtes de marque des intentions commerciales en Haïti. Les futures pages spécialisées restent à construire. La création de sites web est une offre souhaitée mais encore à valider avant publication ; la relation publique avec Invincibo GSM doit aussi être confirmée avant de devenir une entité structurée.

## Accessibilité

L’audit transversal couvre la structure des titres, le lien d’évitement, le focus, le clavier, le menu, les FAQ, les SVG, le téléphone, la langue, la réduction des mouvements, 320 px et le zoom. Il ne constitue pas une certification WCAG. Une vérification manuelle avec lecteur d’écran et sur plusieurs navigateurs reste nécessaire.

## Performance

Le site est statique, sans framework client, police distante, image de contenu, analytics ou script tiers. Le seul JavaScript client attendu gère le menu mobile. Les tailles du build doivent être relevées avant chaque déploiement. Aucun score Lighthouse n’est annoncé sans mesure dédiée.

## Sécurité

Le dépôt ne doit contenir aucun secret, `.env` réel, donnée client ou titre interne anonymisé dans le rendu. Les liens externes ouverts dans un nouvel onglet utilisent `noopener noreferrer`. Les en-têtes recommandés sont documentés dans `SECURITY_HEADERS.md` et restent à adapter à l’hébergeur.

## Formulaires, analytics et déploiement

Aucun formulaire connecté, analytics, tracking, cookie publicitaire, backend ou configuration d’hébergement n’est ajouté. Toute évolution de ce type impose une mise à jour de la politique de confidentialité et une nouvelle validation de production.

## Checklist finale

- [ ] domaine acheté, configuré et marqué non provisoire ;
- [ ] informations légales validées ;
- [ ] pages légales relues ;
- [ ] image Open Graph officielle ajoutée ;
- [ ] favicon validé ;
- [ ] `npm run validate:production` réussi ;
- [ ] liens, sitemap et robots vérifiés sur le domaine final ;
- [ ] audit clavier, lecteur d’écran, zoom et responsive terminé ;
- [ ] performances mesurées sur le build final ;
- [ ] en-têtes de sécurité activés et testés ;
- [ ] formulaire et analytics soit absents, soit documentés et validés ;
- [ ] déploiement explicitement autorisé.

# En-têtes de sécurité recommandés

Ces en-têtes devront être adaptés et testés sur l’hébergement finalement retenu. Aucun modèle n’est actuellement activé.

## Politique commune envisagée

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

`Strict-Transport-Security` ne doit être activé qu’après confirmation du HTTPS sur le domaine définitif. La CSP doit être vérifiée dans le navigateur après chaque ajout de service externe.

## Hostinger, Apache ou Nginx

- Apache : traduire les valeurs validées en directives `Header always set` dans la configuration autorisée ou `.htaccess`.
- Nginx : utiliser des directives `add_header ... always;` dans le bloc du site.
- Ne pas publier de fichier de configuration avant de connaître le serveur réellement utilisé.

## Cloudflare Pages

Les en-têtes peuvent être déclarés dans un fichier `_headers` ou dans les règles de réponse Cloudflare. La syntaxe et le comportement devront être vérifiés dans la documentation de la plateforme au moment du choix.

## Vercel

Les en-têtes peuvent être configurés dans `vercel.json` ou dans la configuration du framework. Aucun fichier Vercel n’est créé tant que cette plateforme n’est pas sélectionnée.

## Validation avant activation

- confirmer le domaine et HTTPS ;
- tester toutes les pages, le menu et WhatsApp ;
- vérifier qu’aucune ressource nécessaire n’est bloquée ;
- vérifier l’absence de source map et de fichier interne public ;
- réviser `connect-src`, `img-src` et `form-action` si un formulaire ou des analytics sont ajoutés.

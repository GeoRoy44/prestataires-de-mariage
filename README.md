# Prestataires de Mariage

Média-guide éditorial français consacré au choix, à la comparaison et à la compréhension des prestataires de mariage.

## Stack

- Astro
- CSS natif
- Collections Markdown Astro Content
- `@astrojs/sitemap`
- Cloudflare Pages

## Développement local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:4321`.

## Vérifications

```bash
npm run check
npm run build
```

Le build génère le répertoire `dist/` et le sitemap à partir de la valeur `site` dans `astro.config.mjs`.

## Déploiement Cloudflare Pages

1. Dans Cloudflare : **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
2. Sélectionnez `GeoRoy44/prestataires-de-mariage`.
3. Renseignez :
   - Production branch : `main`
   - Framework preset : `Astro`
   - Build command : `npm run build`
   - Build output directory : `dist`
   - Root directory : `/`
   - Node.js : `22`
4. Déployez. Cloudflare attribue une URL `*.pages.dev`.
5. Une fois le build validé, ajoutez `prestatairesdemariage.fr` puis `www.prestatairesdemariage.fr` dans **Custom domains**.
6. Redirigez `www` vers le domaine racine avec une redirection permanente.

## Contenus

Les articles se trouvent dans `src/content/blog/`. Chaque article doit respecter le schéma de `src/content.config.ts`, contenir une seule catégorie et rester en `draft: true` jusqu’à sa validation.

Catégories :

- `photographie-video`
- `reception-restauration`
- `ambiance-decoration`
- `organisation-accompagnement`

## Sécurité

Aucun secret, token ou variable privée ne doit être placé dans le dépôt. Utilisez des variables d’environnement et `.gitignore` uniquement lorsqu’un service le nécessitera.

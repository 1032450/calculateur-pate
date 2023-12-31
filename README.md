# calculateur-pate

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production
After build, in dist/assets, duplicate index.html and rename the copy as 404.html (fixes routing bug)

```sh
npm run build
```

### Deploy on Github Pages (push master before?)
See https://www.youtube.com/watch?v=yo2bMGnIKE8

```sh
git subtree push --prefix dist origin gh-pages
```
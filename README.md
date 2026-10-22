# Jason Vargas – Menús digitales para restaurantes

Página de presentación de **Jason Vargas** (menús digitales con código QR y panel Admin para negocios de comida). Sitio estático (HTML + CSS + JavaScript), sin build.

## Estructura

```
├── index.html          # Estructura de la página
├── css/styles.css      # Estilos (las imágenes se enlazan como variables --i-* en :root)
├── js/app.js           # Lógica: animaciones, demo, antes/después, reseñas
├── assets/img/         # Fotos y capturas de los menús de ejemplo
└── .nojekyll           # Evita procesamiento de Jekyll en GitHub Pages
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
3. Tu sitio quedará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

## Probar en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
```

## Notas

- Las reseñas de la sección de testimonios están en la constante `REV` de `js/app.js` y son textos de ejemplo: reemplázalas por reseñas reales antes de publicar.

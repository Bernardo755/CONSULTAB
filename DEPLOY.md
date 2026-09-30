# Puesta en GitHub Pages

Sube TODO el contenido de esta carpeta conservando exactamente esta estructura.

En `config.js`, sustituye:
`TU_ID_DE_IMPLEMENTACION_AQUI`
por el ID real de tu Web App de Apps Script.

También conserva en la raíz las imágenes que ya utilizaba tu aplicación:
- `Imagen11.png`
- `user___Imagen4t (5).gif`

No necesitas colocar las URLs de las aplicaciones en `index.html`; están en `config.js`.

## Importante sobre inspección del navegador
El `index.html` ahora contiene únicamente el esqueleto y las referencias a archivos. Los módulos se descargan por separado. Esto reduce mucho el contenido que aparece directamente en el HTML principal, pero NO oculta el JavaScript: todo JS que el navegador ejecuta puede verse en DevTools > Sources/Network.

Si necesitas que una URL/API sea realmente secreta, no debe enviarse al navegador; necesitarías un backend/intermediario.

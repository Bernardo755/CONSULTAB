/***********************************************************************************
 * config.js
 * -----------------------------------------------------------------------------
 * Aquí viven las URLs/endpoints que antes estaban escritas directamente dentro
 * del <script> de index.html. Al separarlas en este archivo:
 *   - El HTML principal queda "limpio", sin URLs ni IDs de despliegue a la vista
 *     inmediata de quien abra el archivo index.html.
 *   - Es más fácil cambiarlas sin tocar el HTML (por ejemplo, si cambias de
 *     entorno de pruebas a producción).
 *
 * AVISO IMPORTANTE DE SEGURIDAD (léelo, es real):
 * GitHub Pages es hosting 100% ESTÁTICO. Este archivo config.js se descarga al
 * navegador exactamente igual que index.html — cualquiera puede verlo con
 * "Ver código fuente", las herramientas de desarrollador (pestaña Red/Network),
 * o simplemente visitando https://tu-sitio.github.io/config.js directamente.
 * Separar este archivo REDUCE la exposición "a simple vista" (quien abra
 * index.html no ve la URL de inmediato) pero NO oculta técnicamente estos
 * valores de alguien que decida inspeccionarlos a propósito.
 *
 * Para ocultar de verdad la URL del Web App de Apps Script (y que nunca viaje
 * al navegador) se necesitaría un servidor intermedio (backend propio, Cloudflare
 * Worker, Vercel/Netlify function, etc.) que reciba la petición del navegador y
 * él sí llame a Apps Script con la URL guardada como secreto de servidor. Sin
 * ese intermediario, la seguridad real debe garantizarla el propio Apps Script:
 * valida usuario/contraseña en cada acción (como ya hace tu doPost), y no
 * publiques acciones que permitan leer/escribir sin verificar el rol.
 *********************************************************************************** */

window.APP_CONFIG = {
  // URL de implementación (.../exec) de tu Web App de Apps Script (doPost)
  API_URL: 'https://script.google.com/macros/s/AKfycbwiWNdsNQ3XUOM96JO-L2c8RuI1SreWVXHETYnlGffcdjGycJxXLCPf652jIAzDT3Ar5A/exec',

  // URLs de las apps externas que se abren dentro de los <iframe> de los modales
  URL_APP_B: 'https://bernardo755.github.io/PRUEBA/',
  URL_CARGA_TARJETAS: 'https://bernardo755.github.io/ACTUALIZADOR/',
  URL_SISTEMA_CONSULTA: 'https://bernardo755.github.io/ESTADOS/'
};

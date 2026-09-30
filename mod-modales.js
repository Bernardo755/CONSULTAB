/* =========================================================
   MODALES / IFRAME
   Las URLs permanecen exclusivamente en config.js.
   ========================================================= */
const URL_APP_B = window.APP_CONFIG.URL_APP_B;
const btnAbrir = document.getElementById('btnAbrirAppB');
const btnCerrar = document.getElementById('btnCerrarAppB');
const modal = document.getElementById('modalAppB');
const iframe = document.getElementById('iframeAppB');

btnAbrir.addEventListener('click', () => {
    iframe.src = URL_APP_B;
    modal.style.display = 'flex';
});
btnCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = '';
});

const URL_CARGA_TARJETAS = window.APP_CONFIG.URL_CARGA_TARJETAS;
const btnAbrirTarjetas = document.getElementById('btnAbrirCargaTarjetas');
const btnCerrarTarjetas = document.getElementById('btnCerrarCargaTarjetas');
const modalTarjetas = document.getElementById('modalCargaTarjetas');
const iframeTarjetas = document.getElementById('iframeCargaTarjetas');

btnAbrirTarjetas.addEventListener('click', () => {
    iframeTarjetas.src = URL_CARGA_TARJETAS;
    modalTarjetas.style.display = 'flex';
});
btnCerrarTarjetas.addEventListener('click', () => {
    modalTarjetas.style.display = 'none';
    iframeTarjetas.src = '';
});

const URL_SISTEMA_CONSULTA = window.APP_CONFIG.URL_SISTEMA_CONSULTA;
const btnAbrirConsulta = document.getElementById('btnAbrirConsulta');
const btnCerrarConsulta = document.getElementById('btnCerrarConsulta');
const modalConsulta = document.getElementById('modalConsulta');
const iframeConsulta = document.getElementById('iframeConsulta');

btnAbrirConsulta.addEventListener('click', () => {
    iframeConsulta.src = URL_SISTEMA_CONSULTA;
    modalConsulta.style.display = 'flex';
});
btnCerrarConsulta.addEventListener('click', () => {
    modalConsulta.style.display = 'none';
    iframeConsulta.src = '';
});

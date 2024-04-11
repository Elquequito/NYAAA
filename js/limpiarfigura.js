document.addEventListener('DOMContentLoaded', function () {
    const botonLimpiarFiltros = document.getElementById('limpiar-filtros');
    botonLimpiarFiltros.addEventListener('click', limpiarFiltros);
});

function limpiarFiltros() {
    const figuras = document.querySelectorAll('.figure-box');
    figuras.forEach(figura => {
        figura.style.display = 'block';
    });
}

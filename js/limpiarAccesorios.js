document.addEventListener('DOMContentLoaded', function () {
    const botonLimpiarFiltros = document.getElementById('limpiar-filtros');
    botonLimpiarFiltros.addEventListener('click', limpiarFiltros);
});

function limpiarFiltros() {
    const accesorios = document.querySelectorAll('.accesorios-box');
    accesorios.forEach(accesorio => {
        accesorio.style.display = 'block';
    });

    // Reiniciar selectores de filtro
    document.getElementById('categoria').value = 'todas';
    document.getElementById('stock').value = 'todos';
}

document.addEventListener('DOMContentLoaded', function () {
    const botonFiltrar = document.getElementById('filtrar');
    botonFiltrar.addEventListener('click', filtrar);

    const botonLimpiarFiltros = document.getElementById('limpiar-filtros');
    botonLimpiarFiltros.addEventListener('click', limpiarFiltros);
});

function filtrar() {
    const marcaSeleccionada = document.getElementById('marca').value;
    const tiendaSeleccionada = document.getElementById('tienda').value;
    const stockSeleccionado = document.getElementById('stock').value;

    const figuras = document.querySelectorAll('.figure-box');

    figuras.forEach(figura => {
        const marca = figura.dataset.marca;
        const tienda = figura.dataset.tienda;
        const stock = figura.dataset.stock;

        const cumpleFiltros = (
            (marcaSeleccionada === 'todas' || marca === marcaSeleccionada) &&
            (tiendaSeleccionada === 'todas' || tienda === tiendaSeleccionada) &&
            (stockSeleccionado === 'todos' || stock === stockSeleccionado)
        );

        if (cumpleFiltros) {
            figura.style.display = 'block';
        } else {
            figura.style.display = 'none';
        }
    });
}

function limpiarFiltros() {
    const figuras = document.querySelectorAll('.figure-box');
    figuras.forEach(figura => {
        figura.style.display = 'block';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const categoriaSelect = document.getElementById('categoria');
    const stockSelect = document.getElementById('stock');
    const botonFiltrar = document.getElementById('filtrar'); // Agregamos la referencia al botón de filtrar

    // Agregar evento click al botón de filtrar
    botonFiltrar.addEventListener('click', filtrarAccesorios);

    function filtrarAccesorios() {
        const categoriaSeleccionada = categoriaSelect.value;
        const stockSeleccionado = stockSelect.value;

        const accesorios = document.querySelectorAll('.accesorios-box');

        accesorios.forEach(function(accesorio) {
            const categoria = accesorio.getAttribute('data-categoria');
            const stock = accesorio.getAttribute('data-stock');

            // Verificar si el accesorio coincide con los filtros seleccionados
            const coincideCategoria = (categoriaSeleccionada === 'todas' || categoria === categoriaSeleccionada);
            const coincideStock = (stockSeleccionado === 'todos' || stock === stockSeleccionado);

            // Mostrar u ocultar el accesorio según los filtros seleccionados
            if (coincideCategoria && coincideStock) {
                accesorio.style.display = 'block';
            } else {
                accesorio.style.display = 'none';
            }
        });
    }
});

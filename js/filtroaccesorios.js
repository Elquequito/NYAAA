document.addEventListener("DOMContentLoaded", function() {
    const categoriaSelect = document.getElementById('categoria');
    const stockSelect = document.getElementById('stock');

    // Agregar evento change a los select de categoría y stock
    categoriaSelect.addEventListener('change', filtrarAccesorios);
    stockSelect.addEventListener('change', filtrarAccesorios);

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
        // Reiniciar selectores de filtro
        document.getElementById('categoria').value = 'todas';
        document.getElementById('stock').value = 'todos';
});

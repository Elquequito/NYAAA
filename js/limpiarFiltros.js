document.addEventListener('DOMContentLoaded', function() {
    const limpiarFiltrosButton = document.getElementById('limpiar-filtros');
    
    limpiarFiltrosButton.addEventListener('click', function() {
        // Resetea los valores de los selects a sus opciones predeterminadas
        document.getElementById('marca').value = 'todas';
        document.getElementById('tienda').value = 'todas';
        document.getElementById('stock').value = 'todos';
    });
});

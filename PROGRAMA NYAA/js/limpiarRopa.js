document.addEventListener("DOMContentLoaded", function() {
    const limpiarRopaButton = document.getElementById('limpiar-filtros');
    limpiarRopaButton.addEventListener('click', limpiarRopa);
});

function limpiarRopa() {
    const productos = document.querySelectorAll('.ropa-box');
    productos.forEach(producto => {
        producto.style.display = 'block';
    });

    // Reiniciar selectores de filtro
    document.getElementById('categoria').value = 'todas';
    document.getElementById('talla').value = 'todas';
    document.getElementById('stock').value = 'todos';
}

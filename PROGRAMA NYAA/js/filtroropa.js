document.addEventListener('DOMContentLoaded', function() {
    const filtrarButton = document.getElementById('filtrar');
    filtrarButton.addEventListener('click', filtrarRopa);
});

function filtrarRopa() {
    const categoriaSeleccionada = document.getElementById('categoria').value;
    const tallaSeleccionada = document.getElementById('talla').value;
    const stockSeleccionado = document.getElementById('stock').value;

    const productos = document.querySelectorAll('.ropa-box');
    productos.forEach(producto => {
        const categoriaProducto = producto.dataset.categoria;
        const tallaProducto = producto.dataset.talla;
        const stockProducto = producto.dataset.stock;

        if ((categoriaSeleccionada === 'todas' || categoriaProducto === categoriaSeleccionada) &&
            (tallaSeleccionada === 'todas' || tallaProducto === tallaSeleccionada) &&
            (stockSeleccionado === 'todos' || stockProducto === stockSeleccionado)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar el formulario correspondiente al tipo de producto seleccionado
    document.getElementById('tipo-producto').addEventListener('change', function() {
        const tipoProducto = this.value;
        const formularioProducto = document.getElementById('formulario-producto');
        formularioProducto.innerHTML = ''; // Limpiamos el formulario antes de mostrar uno nuevo
        if (tipoProducto === 'ropa') {
            formularioProducto.innerHTML = `
                <input type="text" placeholder="Talla"><br>
                <input type="text" placeholder="Descripción"><br>
                <input type="text" placeholder="Detalles"><br>
                <input type="text" placeholder="Precio"><br>
            `;
        } else if (tipoProducto === 'figuras') {
            formularioProducto.innerHTML = `
                <input type="text" placeholder="Marca"><br>
                <input type="text" placeholder="Tienda"><br>
                <input type="text" placeholder="Descripción"><br>
                <input type="text" placeholder="Detalles"><br>
                <input type="text" placeholder="Precio"><br>
            `;
        } else if (tipoProducto === 'accesorios') {
            formularioProducto.innerHTML = `
                <input type="text" placeholder="Categoría"><br>
                <input type="text" placeholder="Precio"><br>
            `;
        }
        formularioProducto.classList.remove('hidden'); // Mostramos el formulario
    });

    // Función para cerrar el mensaje de éxito
    document.getElementById('cerrar-mensaje').addEventListener('click', function() {
        document.getElementById('mensaje').classList.add('hidden');
    });

    // Función para mostrar el mensaje de éxito y cerrarlo después de un tiempo
    document.getElementById('guardar-producto').addEventListener('click', function() {
        document.getElementById('mensaje').classList.remove('hidden');
        setTimeout(function() {
            document.getElementById('mensaje').classList.add('hidden');
        }, 3000); // Cerrar el mensaje después de 3 segundos (3000 milisegundos)
    });
});

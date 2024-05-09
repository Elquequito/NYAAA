document.getElementById("agregarProductoForm").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value.trim();
    var precio = document.getElementById("precio").value.trim();
    var descripcion = document.getElementById("descripcion").value.trim();
    var detalles = document.getElementById("detalles").value.trim();

    if (nombre === "" || precio === "" || descripcion === "" || detalles === "") {
        alert("Por favor, completa todos los campos para agregar un producto.");
        event.preventDefault();
    } else {
        alert("Producto agregado con éxito.");
    }
});

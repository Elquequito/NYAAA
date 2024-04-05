// Archivo script_personalizado.js

document.addEventListener("DOMContentLoaded", function() {
    // Tu lógica JavaScript aquí
    console.log("El DOM ha sido cargado");

    // Ejemplo de cómo puedes agregar funcionalidad
    const sortSelect = document.getElementById("sort");
    sortSelect.addEventListener("change", function() {
        console.log("Se ha cambiado lsa opción de ordenamiento:", this.value);
        // Aquí puedes implementar la lógica para ordenar los productos según la opción seleccionada
    });
});

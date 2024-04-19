document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de filtros y el menú desplegable
    var filtroToggle = document.querySelector(".filtro-toggle");
    var filtroDropdown = document.querySelector(".filtro-dropdown");
    
    // Mostrar u ocultar las opciones de filtro al hacer clic en el botón de filtros
    filtroToggle.addEventListener("click", function() {
        filtroDropdown.classList.toggle("show");
    });

    // Ocultar las opciones de filtro cuando se haga clic fuera de ellas
    window.addEventListener("click", function(event) {
        if (!filtroToggle.contains(event.target) && !filtroDropdown.contains(event.target)) {
            filtroDropdown.classList.remove("show");
        }
    });
});

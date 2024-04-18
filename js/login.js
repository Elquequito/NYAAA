document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('registro');
    const loginBtn = document.getElementById('login');
    const loginButton = document.getElementById('loginButton');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Agregar un event listener para el clic en el botón de inicio de sesión
    loginButton.addEventListener("click", function() {
        // Redireccionar al INDEX PRINCIPAL.html cuando se hace clic en el botón de inicio de sesión
        window.location.href = "../html/INDEX PRINCIPAL.html";
    });
});

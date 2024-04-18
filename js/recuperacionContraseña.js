document.addEventListener("DOMContentLoaded", function() {
    const recoveryForm = document.getElementById("recovery-form");
    const successMessage = document.getElementById("success-message");

    recoveryForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Aquí iría el código para enviar el correo de recuperación (simulado aquí)
        // Una vez enviado el correo, se muestra el mensaje de éxito y se oculta el formulario
        successMessage.classList.remove("hidden");
        recoveryForm.classList.add("hidden");
    });
});

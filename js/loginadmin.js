document.getElementById('loginBtn').addEventListener('click', function(event) {
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('pass').value;

    // Verificar si el usuario y la contraseña no están vacíos
    if (usuario.trim() === '' || contraseña.trim() === '') {
        alert('Por favor, ingresa nombre de usuario y contraseña.');
        event.preventDefault(); // Evita que el enlace se siga al hacer clic
    } else {
        // Aquí podrías agregar una lógica adicional de validación si lo necesitas
        // Por ejemplo, verificar si el usuario y la contraseña son válidos en una base de datos
        // Si la validación es exitosa, el enlace se seguirá automáticamente
        alert('Inicio exitoso!');
    }
});

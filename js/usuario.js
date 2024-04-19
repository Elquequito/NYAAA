
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('editarPerfil').addEventListener('click', function() {
            document.querySelector('.edit-profile').style.display = 'block';
            document.querySelector('.account-info .data').style.display = 'none';
        });

        document.getElementById('guardarPerfil').addEventListener('click', function() {
            alert('Usuario Modificado con Éxito');
        });
    });


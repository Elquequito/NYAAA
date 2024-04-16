// Esperar a que el contenido del documento esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las imágenes de la galería
    var imagenes = document.querySelectorAll('.galeria-img');

    // Índice inicial de la imagen
    var indiceImagen = 0;

    // Función para ocultar todas las imágenes excepto la especificada por el índice
    function ocultarTodasExcepto(indice) {
        imagenes.forEach(function(img, index) {
            if (index !== indice) {
                img.style.display = 'none';
            }
        });
    }

    // Función para mostrar la siguiente imagen
    function mostrarSiguienteImagen() {
        // Ocultar la imagen actual
        imagenes[indiceImagen].style.display = 'none';

        // Incrementar el índice de la imagen, volviendo al inicio si es necesario
        indiceImagen = (indiceImagen + 1) % imagenes.length;

        // Mostrar la siguiente imagen
        imagenes[indiceImagen].style.display = 'block';
    }

    // Ocultar todas las imágenes excepto la primera
    ocultarTodasExcepto(0);

    // Cambiar la imagen cada 4 segundos
    setInterval(mostrarSiguienteImagen, 4000);
});

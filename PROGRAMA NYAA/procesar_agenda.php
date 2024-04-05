<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de Agendar Hora</title>
</head>
<body>
    <h1>Resultado de Agendar Hora</h1>
    <?php
    // Verificar si se reciben los datos del formulario
    if(isset($_POST['nombre']) && isset($_POST['rut']) && isset($_POST['fecha']) && isset($_POST['hora'])) {
        // Capturar los datos del formulario
        $nombre = $_POST['nombre'];
        $rut = $_POST['rut'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];

        // Realizar cualquier validación adicional si es necesario

        // Mostrar los datos recibidos
        echo "<p>Nombre: $nombre</p>";
        echo "<p>RUT: $rut</p>";
        echo "<p>Fecha: $fecha</p>";
        echo "<p>Hora: $hora</p>";

        // Aquí podrías agregar código para guardar los datos en una base de datos o realizar otras acciones necesarias.
    } else {
        // Si no se reciben todos los datos del formulario, mostrar un mensaje de error.
        echo "<p>Error: No se recibieron todos los datos del formulario.</p>";
    }
    ?>
    <p><a href="index.html">Volver al inicio</a></p>
</body>
</html>

function goBack() {
    window.history.back();
}

function confirmDelete(usuario) {
    if (confirm(`¿Seguro que quieres eliminar al usuario ${usuario}?`)) {
        alert("Usuario eliminado con éxito");
        // Aquí puedes agregar la lógica para eliminar el usuario si es necesario
    }
}

function confirmAction(usuario) {
    if (confirm(`¿Seguro que quieres bloquear al usuario ${usuario}?`)) {
        alert("Usuario bloqueado con éxito");
        // Aquí puedes agregar la lógica para eliminar el usuario si es necesario
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById('sort');
    const catalog = document.getElementById('ropa');

    sortSelect.addEventListener('change', function() {
        const sortingMethod = this.value;

        // Obtener todos los elementos de ropa
        const ropaBoxes = Array.from(catalog.getElementsByClassName('ropa-box'));

        // Ordenar los elementos según el método seleccionado
        if (sortingMethod === 'precioMayor') {
            // Ordenar de mayor a menor precio
            ropaBoxes.sort((a, b) => {
                const precioA = parseFloat(a.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                const precioB = parseFloat(b.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                return precioB - precioA;
            });
        } else if (sortingMethod === 'precioMenor') {
            // Ordenar de menor a mayor precio
            ropaBoxes.sort((a, b) => {
                const precioA = parseFloat(a.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                const precioB = parseFloat(b.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                return precioA - precioB;
            });
        } else if (sortingMethod === 'disponible') {
            // Ordenar por disponibilidad de stock
            ropaBoxes.sort((a, b) => {
                const stockA = a.dataset.stock;
                const stockB = b.dataset.stock;
                if (stockA === 'disponible' && stockB === 'agotado') {
                    return -1; // A viene antes que B (A está disponible y B está agotado)
                } else if (stockA === 'agotado' && stockB === 'disponible') {
                    return 1; // B viene antes que A (B está disponible y A está agotado)
                } else {
                    return 0; // Sin cambios en el orden
                }
            });
        } else if (sortingMethod === 'recientes') {
            // Aquí podrías implementar la lógica para ordenar por productos más recientes si fuera necesario
            // Por simplicidad, aquí no se ha implementado.
        }

        // Vaciar el catálogo actual
        catalog.innerHTML = '';

        // Agregar los elementos ordenados al catálogo
        ropaBoxes.forEach(box => catalog.appendChild(box));
    });
});

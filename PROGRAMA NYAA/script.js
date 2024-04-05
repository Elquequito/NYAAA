document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById('sort');
    const catalog = document.getElementById('catalog');

    sortSelect.addEventListener('change', function() {
        const sortingMethod = this.value;

        // Obtener todos los elementos de figura
        const figureBoxes = Array.from(catalog.getElementsByClassName('figure-box'));

        // Ordenar los elementos según el método seleccionado
        if (sortingMethod === 'precioMayor') {
            // Ordenar de mayor a menor precio total
            figureBoxes.sort((a, b) => {
                const precioA = parseFloat(a.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                const precioB = parseFloat(b.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                return precioB - precioA;
            });
        } else if (sortingMethod === 'precioMenor') {
            // Ordenar de menor a mayor precio total
            figureBoxes.sort((a, b) => {
                const precioA = parseFloat(a.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                const precioB = parseFloat(b.querySelector('p:nth-child(3)').textContent.replace('$', '').replace(',', ''));
                return precioA - precioB;
            });
        } else if (sortingMethod === 'popularidad') {
            // Aquí podrías implementar una lógica de ordenación por popularidad si fuera necesario
            // Por simplicidad, aquí no se ha implementado.
        } else if (sortingMethod === 'recientes') {
            // Aquí podrías implementar la lógica para ordenar por productos más recientes si fuera necesario
            // Por simplicidad, aquí no se ha implementado.
        }

        // Vaciar el catálogo actual
        catalog.innerHTML = '';

        // Agregar los elementos ordenados al catálogo
        figureBoxes.forEach(box => catalog.appendChild(box));
    });
});

const inputQuantity = document.querySelector('.input-cantidad')
const btnIncrement = document.querySelector('#up')
const btnDecrement = document.querySelector('#down')

let valueByDefault = parseInt(inputQuantity.value)

// Funciones Click

btnIncrement.addEventListener('click', () =>{
    valueByDefault +=1
    inputQuantity.value = valueByDefault
})

btnDecrement.addEventListener('click', () =>{
    if (valueByDefault === 1){
        return
    }
    valueByDefault -=1
    inputQuantity.value = valueByDefault
})

// Toggle
// Constantes toggle titulos

const toggleDescription = document.querySelector('.titulo-descripcion');
const toggleAdditionalInformation = document.querySelector('.titulo-detalle');
const toggleReviews = document.querySelector('.titulo-reviews');

// Constantes contenido texto

const contentDescription = document.querySelector('.txt-descripcion');
const contentAdditionalInformation = document.querySelector('.txt-detalle');
const contentReviews = document.querySelector('.txt-reviews');

// Funciones Toggle

toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});
toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});
toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden');
});
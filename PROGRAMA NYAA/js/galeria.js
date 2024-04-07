var slideIndex = 0;
var slides = document.getElementsByClassName("gallery");
var timer; // Variable para el temporizador

showSlides(); // Llamada inicial para comenzar la presentación automática

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    timer = setTimeout(showSlides, 4000); // Cambiar la imagen cada 2 segundos
}

document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const modal = document.getElementById('thank-you-modal');
  
    paymentForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Mostrar la ventana modal
      modal.style.display = 'flex';
    });
  });
  
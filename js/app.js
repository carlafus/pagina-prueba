const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

// Copias Contactos
// const telefonoPrincipal = document.getElementById("telefono-principal");
// const botonTelefonoPrincipal = document.getElementById("boton-telefono-principal");


imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const ruta = imagen.querySelector('img').src;
        imagenModal.src = ruta;
    });

});




//copy to clipboard
function copiarAlPortapapeles(elementId) {
    var elemento = document.getElementById(elementId);
    var seleccion = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(elemento);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand('copy');
    seleccion.removeAllRanges();
    //alert('Texto copiado al portapapeles: ' + elemento.innerText);
}


//formulario de contacto

const form = document.getElementById('formulario-contacto');
const confirmacionMensaje = document.getElementById("confirmacion-form");
const modalConfirmacion = document.getElementById('modal-contacto');
const bootstrapModal = new bootstrap.Modal(modalConfirmacion);
const mensajeModalContacto = document.getElementById("mensaje-modal-contacto");

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        mensajeModalContacto.textContent = "Gracias por su Mensaje. Le responderemos a la brevedad.";
    } else {
        mensajeModalContacto.textContent = "Hubo un problema al enviar su mensaje. Intente nuevamente mas tarde.";
    }
    this.reset();
    bootstrapModal.show();
}

// Get the button
let backToTopButton = document.getElementById('back-to-top-btn');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener('click', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
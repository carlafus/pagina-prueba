const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

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
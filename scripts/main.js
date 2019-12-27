var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/sunset-icon2.jpg') {
      miImage.setAttribute('src','images/sunset-1046475_640.jpg');}
    else {miImage.setAttribute('src', 'images/sunset-icon2.jpg');}
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Travel to Malibu,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Travel to Malibu,' + nombreAlmacenado;
}
miBoton.onclick = function() 
{estableceNombreUsuario();}

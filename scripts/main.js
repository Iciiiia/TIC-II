var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute("https://cdn.pixabay.com/photo/2018/03/03/08/08/sunset-3195123_960_720.jpg");
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Fiesta_provincial_del_Sol.jpg",'images/beach-party.png');
    } else {
      miImage.setAttribute("https://cdn.pixabay.com/photo/2018/03/03/08/08/sunset-3195123_960_720.jpg", 'images/sunset-icon.png');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}

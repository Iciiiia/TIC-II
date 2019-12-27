var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/sunset-icon2.jpg') {
      miImage.setAttribute('src','images/sunset-1046475_640.jpg');
    } else {
      miImage.setAttribute('src', 'images/sunset-icon2.jpg');
    }
}

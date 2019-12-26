var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/beach-party.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/sunset-icon2.jpg') {
    myImage.setAttribute ('src','images/sunset-1046475_640.jpg');
  } else {
    myImage.setAttribute ('src','images/sunset-icon2.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Travel with us to Malibu ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Travel with us to Malibu ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

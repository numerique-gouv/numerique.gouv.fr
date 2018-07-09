// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------

var button = document.querySelector('#hamburger-button');
var activatedClass = 'is-active';

button.addEventListener('click', function(e) {
  e.preventDefault();
  if(button.classList.contains(activatedClass)){
    button.classList.remove(activatedClass);

  } else {
    button.classList.add(activatedClass);
  }
});

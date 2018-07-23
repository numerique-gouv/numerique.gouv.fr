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

const button = document.querySelector('#hamburger-button');
const activatedClass = 'is-active';

button.addEventListener('click', function(e) {
  e.preventDefault();
  if(button.classList.contains(activatedClass)){
    button.classList.remove(activatedClass);

  } else {
    button.classList.add(activatedClass);
  }
});

if ( ! Modernizr.objectfit ) {
  $('.post__image-container').each(function () {
    const $container = $(this),
      imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }
  });
}



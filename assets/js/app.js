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

function getFileSize(url)
{
  let fileSize = 0;
  const http = new XMLHttpRequest();
  http.open('HEAD', url, false); // false = Synchronous

  http.send(null); // it will stop here until this http request is complete

  // when we are here, we already have a response, b/c we used Synchronous XHR

  if (http.status === 200) {
    fileSize = http.getResponseHeader('content-length');
  }

  return fileSize;
}

const elements = document.querySelectorAll('[id^="communiqueSize-"]');
elements.forEach(function (element) {
  element.innerHTML += ' ' + Math.round(getFileSize(element.getAttribute('href'))/1024) + ' Ko )'
});

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


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// --------------------------------------------------
// APP.JS
// --------------------------------------------------


//
// Custom JS
// --------------------------------------------------

//Menu
const button = $('#hamburger-button');
const activatedClass = 'is-active';
const grayClass = 'gray';
const menu = $('#responsive-menu');
const main = $('#main');

button.on('click', function() {
  if(!closeMenu()){
    button.addClass(activatedClass);
    main.addClass(grayClass);
    Foundation.Motion.animateIn(menu,"slide-in-left");
  }
});

main.on('click', function (e) {
    closeMenu();
});

$( document ).on( 'keydown', function ( e ) {
  if ( e.keyCode === 27 ) { // ESC
    closeMenu();
  }
});

function closeMenu() {
  if(button.hasClass(activatedClass)) {
    Foundation.Motion.animateOut(menu,"slide-out-left",function () {
      button.removeClass(activatedClass);
      main.removeClass(grayClass);
    });
    return true;
  }
}

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

$('.icon-arrow-down').each(function ( index ) {
  const selector = '#mission' + (index + 2);
  $( this ).click(function () {
    Foundation.SmoothScroll.scrollToLoc(selector, {threshold: 50, offset: 0 }, null);
  })
});





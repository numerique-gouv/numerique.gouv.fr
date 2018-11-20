import '@babel/polyfill'
import "isomorphic-fetch"
import "es6-promise"

//Menu
const button = $('#hamburger-button');
const activatedClass = 'open';
const grayClass = 'gray';
const menu = $('#responsive-menu');
const main = $('#main');

if (process.env.NODE_ENV === 'development') {
  console.log('Welcome to development');
} else if (process.env.NODE_ENV === 'preproduction') {
  console.log('Welcome to preproduction');
}

button.on('click', function() {
  toogleMenu();
});

$('body').on('click', function (e) {
  if(button.hasClass(activatedClass) && e.target.id !== 'input-rechercher') {
    closeMenu();
  }
});

$( document ).on( 'keydown', function ( e ) {
  if ( e.keyCode === 27 ) { // ESC
    closeMenu();
  }
});

function toogleMenu() {
  if(!button.hasClass(activatedClass)) {
    Foundation.Motion.animateIn(menu, "slide-in-left", function () {
      main.addClass(grayClass);
      button.addClass(activatedClass);
    });
  } else {
    closeMenu();
  }
}

function closeMenu() {
  if(button.hasClass(activatedClass)) {
    Foundation.Motion.animateOut(menu,"slide-out-left",function () {
      button.removeClass(activatedClass);
      main.removeClass(grayClass);
    });
  }
}

if ( ! Modernizr.objectfit ) {
  $('.object-fit__image-container').each(function () {
    const $container = $(this);
    const imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }
  });
}

const $elements = $("[id^='fileSize-']");
$elements.each(function () {
  const that = this;
  fetch($(this).attr("href")).then(function (response) {
    const fileSize = response.headers.get('Content-Length')/1024;
    const $element = $(that);
    const $pdf = $element.find(".pdf");
    $pdf.text($pdf.text() + ' ' + Math.round( fileSize ) + ' Ko)');
  });
});

$('.icon-arrow-down').each(function ( index ) {
  const selector = '#list' + (index + 2);
  $( this ).click(function () {
    Foundation.SmoothScroll.scrollToLoc(selector, {threshold: 50, offset: 0 }, null);
  })
});

$('#button-production').click(function () {
  $('#modal-production').foundation('close');
  $('#modal-production-done').foundation('open');
});




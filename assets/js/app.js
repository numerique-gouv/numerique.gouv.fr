// --------------------------------------------------
// APP.JS
// --------------------------------------------------


//
// Custom JS
// --------------------------------------------------
import $ from 'jquery'
import '@babel/polyfill'
import "isomorphic-fetch"
import "es6-promise"

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

const $elements = $("[id^='communiqueSize-']");
$elements.each(function () {
  const that = this;
  fetch($(this).attr("href")).then(function (response) {
    const fileSize = response.headers.get('Content-Length')/1024;
    const $element = $(that);
    $element.text($element.text() + ' ' + Math.round( fileSize ) + ' Ko )');
  });
});

$('.icon-arrow-down').each(function ( index ) {
  const selector = '#mission' + (index + 2);
  $( this ).click(function () {
    Foundation.SmoothScroll.scrollToLoc(selector, {threshold: 50, offset: 0 }, null);
  })
});





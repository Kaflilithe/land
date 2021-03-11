"use strict";

$('a').click(function () {
  $('html, body').animate({
    scrollTop: $('.anchor').offset().top - 300
  }, 500);
  return false;
});
//# sourceMappingURL=main.js.map
'use strict';

jQuery(function ($) {
  $('.js-hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
    }
    ;
    $('.js-drawer-menu').fadeToggle();
  });
  $(".js-drawer a[href]").on("click", function () {
    $(".js-hamburger").trigger("click");
  });
  var state = false;
  var pos;
  $(".js-hamburger").on("click", function () {
    if (state == false) {
      pos = $(window).scrollTop();
      $("body").addClass("js-fixed").css({
        "top": -pos
      });
      state = true;
    } else {
      $("body").removeClass("js-fixed").css({
        "top": 0
      });
      $(window).scrollTop(pos);
      state = false;
    }
  });
});
(function ($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          600,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $("#profile").offset().top - 120) {
    $("#profile .sej").each(function (i) {
      setTimeout(function () {
        $("#profile .sej").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#portfolio").offset().top - 120) {
    $("#portfolio .leg").each(function (i) {
      setTimeout(function () {
        $("#portfolio .leg").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#kontak").offset().top - 120) {
    $("#kontak .con").each(function (i) {
      setTimeout(function () {
        $("#kontak .con").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
});

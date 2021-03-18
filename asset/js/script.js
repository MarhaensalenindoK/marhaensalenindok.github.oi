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
  if (wScroll > $("#sejarah").offset().top - 120) {
    $("#sejarah .sej").each(function (i) {
      setTimeout(function () {
        $("#sejarah .sej").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#tentang").offset().top - 120) {
    $("#tentang .tk").each(function (i) {
      setTimeout(function () {
        $("#tentang .tk").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#legalitas").offset().top - 120) {
    $("#legalitas .leg").each(function (i) {
      setTimeout(function () {
        $("#legalitas .leg").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#tim").offset().top - 120) {
    $("#tim .tim").each(function (i) {
      setTimeout(function () {
        $("#tim .tim").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#layanan").offset().top - 120) {
    $("#layanan .production").each(function (i) {
      setTimeout(function () {
        $("#layanan .production").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $("#ulasan").offset().top - 120) {
    $("#ulasan .lay").each(function (i) {
      setTimeout(function () {
        $("#ulasan .lay").eq(i).addClass("show");
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

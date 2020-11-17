$(document).ready(function () {
  //navbar sticky effect
  $(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
    var stickyMenu = $(".navigation-bar");
    if ($scrolling >= 200) {
      stickyMenu.addClass("sticky");
    } else {
      stickyMenu.removeClass("sticky");
    }
  });

 
  
  
  //wow js
  new WOW().init();

  //mean menu
  jQuery("#mobile-menu").meanmenu({
    meanMenuContainer: ".contain-bar",
    meanScreenWidth: "992",
    meanMenuClose: "&times;",
    meanMenuCloseSize: "18px",
    meanRevealPositionDistance: "20",
    meanRevealPosition: "left",
  });

  //main-slider

  $(".slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    navSpeed: 2000,
    animateOut: "fadeOut",
    loop: true,
  });

  //product-slider
  $(".product-slider").owlCarousel({
    autoplay: false,
    autoplayTimeout: 4000,
    loop: false,
    items: 1,
  });

  //blog-slider
  $(".blog-slider").owlCarousel({
    autoplay: false,
    autoplayTimeout: 4000,
    loop: false,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
        margin: 20,
      },
      768: {
        items: 3,
        margin: 25,
      },
    },
  });

  //tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

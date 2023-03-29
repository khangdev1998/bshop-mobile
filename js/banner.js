$(document).ready(function () {
  $(".slider").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 650,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1100,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

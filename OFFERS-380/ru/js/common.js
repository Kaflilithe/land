$(document).ready(function () {
  var rev = $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    nav:  false,
    autoHeight: true,

    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

});
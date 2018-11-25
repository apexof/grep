$(document).ready(function(){
  $('.reviews-gallery').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(window).on('resize orientationchange', function() {
    $('.reviews-gallery').slick('resize');
  });

});
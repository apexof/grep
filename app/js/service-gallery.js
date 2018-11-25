$(document).ready(function(){
  $('.my-services-gallery-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 481,
        settings: {
          variableWidth: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: '10px'
        }
      }
    ]
  });

  $(window).on('resize orientationchange', function() {
    $('.my-services-gallery-items').slick('resize');
  });

});
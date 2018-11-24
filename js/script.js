"use strict";

$('a[href*="#"]').smoothscroll({
  duration: 300,
  easing: 'swing'
});
"use strict";

(function () {
  var ul = document.querySelector('ul.examples-work-menu ');

  ul.onclick = function (e) {
    var newLi = e.target;
    if (newLi.tagName !== 'LI') return;

    for (var i = 0; i < ul.children.length; i++) {
      var li = ul.children[i];

      if (li.classList.contains('active')) {
        li.classList.remove('active');
      }
    }

    newLi.classList.add('active');
  };
})();
"use strict";

$(document).ready(function () {
  $('.examples-gallery').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    responsive: [{
      breakpoint: 9999,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 481,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
"use strict";

(function () {
  var mmButtons = document.querySelector('.mobile-menu-buttons');
  var openMenuButton = document.querySelector('.open-menu-button');
  var landingBlocks = document.querySelector('.landing-blocks');
  var mmPage = document.querySelector('.mobile-menu-page');
  var closeButton = mmPage.querySelector('.mobile-menu-page .close-button');
  var anchors = mmPage.querySelector('a[href*="#"]');

  openMenuButton.onclick = function () {
    mmButtons.classList.add('all_blur');
    landingBlocks.classList.add('all_blur');
    document.body.classList.add('no-scroll');
    mmPage.classList.add('mobile-menu-slide');
  };

  closeButton.onclick = function () {
    mmButtons.classList.remove('all_blur');
    landingBlocks.classList.remove('all_blur');
    document.body.classList.remove('no-scroll');
    mmPage.classList.remove('mobile-menu-slide');
  };

  $('a[href*="#"]').click(function () {
    mmButtons.classList.remove('all_blur');
    landingBlocks.classList.remove('all_blur');
    document.body.classList.remove('no-scroll');
    mmPage.classList.remove('mobile-menu-slide');
  });
})();
"use strict";

(function () {
  var sideButtons = document.querySelector('.landing-blocks .side-buttons');
  document.addEventListener('scroll', function () {
    if (window.pageYOffset < 1000) {
      if (!sideButtons.classList.contains('display-none')) {
        sideButtons.classList.add('display-none');
      }
    } else {
      if (sideButtons.classList.contains('display-none')) {
        sideButtons.classList.remove('display-none');
      }
    }
  });
})();
"use strict";

(function () {
  var mmButtons = document.querySelector('.mobile-menu-buttons');
  var landingBlocks = document.querySelector('.landing-blocks');
  var phoneButton = document.querySelector('.mobile-menu-buttons .icon-wrapper');
  var buttonCall = document.querySelector('.button-call');
  var numbTel = document.querySelector('.home .numb-tel');
  var sideButton = document.querySelector('.side-buttons .icon-wrapper');
  var closeButton = document.querySelector('.request-call-page .close-button');
  var callPage = document.querySelector('.request-call-page');

  sideButton.onclick = numbTel.onclick = buttonCall.onclick = phoneButton.onclick = function () {
    mmButtons.classList.add('all_blur');
    landingBlocks.classList.add('all_blur');
    document.body.classList.add('no-scroll');
    callPage.classList.add('request-call-page-slide');
  };

  closeButton.onclick = function () {
    mmButtons.classList.remove('all_blur');
    landingBlocks.classList.remove('all_blur');
    document.body.classList.remove('no-scroll');
    callPage.classList.remove('request-call-page-slide');
  };
})();
"use strict";

$(document).ready(function () {
  $('.reviews-gallery').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $(window).on('resize orientationchange', function () {
    $('.reviews-gallery').slick('resize');
  });
});
"use strict";

$(document).ready(function () {
  $('.my-services-gallery-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }, {
      breakpoint: 481,
      settings: {
        variableWidth: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1 // centerPadding: '10px'

      }
    }]
  });
  $(window).on('resize orientationchange', function () {
    $('.my-services-gallery-items').slick('resize');
  });
});
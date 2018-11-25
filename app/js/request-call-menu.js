(function(){
  const mmButtons = document.querySelector('.mobile-menu-buttons');
  const landingBlocks = document.querySelector('.landing-blocks');

  const phoneButton = document.querySelector('.mobile-menu-buttons .icon-wrapper');
  const buttonCall = document.querySelector('.button-call');
  const numbTel = document.querySelector('.home .numb-tel');
  const sideButton = document.querySelector('.side-buttons .icon-wrapper');

  const closeButton = document.querySelector('.request-call-page .close-button');
  const callPage = document.querySelector('.request-call-page');


  sideButton.onclick = numbTel.onclick = buttonCall.onclick = phoneButton.onclick = function() {
    mmButtons.classList.add('all_blur');
    landingBlocks.classList.add('all_blur');
    document.body.classList.add('no-scroll');
    callPage.classList.add('request-call-page-slide');
  }

  closeButton.onclick = function() {
    mmButtons.classList.remove('all_blur');
    landingBlocks.classList.remove('all_blur');
    document.body.classList.remove('no-scroll');
    callPage.classList.remove('request-call-page-slide');
  }
}());
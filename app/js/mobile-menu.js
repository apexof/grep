(function(){
  const mmButtons = document.querySelector('.mobile-menu-buttons');
  const openMenuButton = document.querySelector('.open-menu-button');
  const landingBlocks = document.querySelector('.landing-blocks');
  const mmPage = document.querySelector('.mobile-menu-page');
  const closeButton = mmPage.querySelector('.mobile-menu-page .close-button');
  const anchors = mmPage.querySelector('a[href*="#"]');


  openMenuButton.onclick = function() {
    mmButtons.classList.add('all_blur');
    landingBlocks.classList.add('all_blur');
    document.body.classList.add('no-scroll');
    mmPage.classList.add('mobile-menu-slide');
  }

  closeButton.onclick = function() {
    mmButtons.classList.remove('all_blur');
    landingBlocks.classList.remove('all_blur');
    document.body.classList.remove('no-scroll');
    mmPage.classList.remove('mobile-menu-slide');
  }

  $('a[href*="#"]').click(function(){
    mmButtons.classList.remove('all_blur');
    landingBlocks.classList.remove('all_blur');
    document.body.classList.remove('no-scroll');
    mmPage.classList.remove('mobile-menu-slide');
  });

}());
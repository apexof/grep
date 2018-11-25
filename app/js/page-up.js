(function(){
  const sideButtons = document.querySelector('.landing-blocks .side-buttons');

  document.addEventListener('scroll', function(){ 
    if(window.pageYOffset < 1000) {
      if(!sideButtons.classList.contains('display-none')){
        sideButtons.classList.add('display-none');
      }
    } else {
      if(sideButtons.classList.contains('display-none')){
        sideButtons.classList.remove('display-none');
      }
    }
  });

}());
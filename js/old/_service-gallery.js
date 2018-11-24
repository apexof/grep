(function(){
  const gallery = document.querySelector('.my-services-gallery-items');
  const galleryW = gallery.scrollWidth + 140;
  const ul = document.querySelector('.services-gallery>ul');
  const galleryItem = document.querySelectorAll('.gallery-item');
  let itemIndex = 0
  let programScroll = false;

  gallery.onscroll = function() { 
    if (programScroll) return;
    for(let i = 0; i < galleryItem.length; i++){  
      itemCords = galleryItem[i].getBoundingClientRect().left;
      if(screen.width / 2 - itemCords > 0 && screen.width / 2 - itemCords < galleryItem[i].clientWidth ) {
        if(itemIndex !== i){
          clearClass();
          ul.children[i].classList.add('active');
          itemIndex = i;
        }
        break;
      }
    }
  }

  ul.onclick = function(e){
    const t = e.target;
    if (t.tagName !== 'LI') return;
    clearClass();

    t.classList.add('active');
    for (var i = 0; i < ul.children.length; i++) {
      if( ul.children[i].classList.contains('active')){
        let destCord = Math.ceil(galleryItem[i].offsetLeft - screen.width / 2 + galleryItem[i].clientWidth / 2);

        if (destCord < 0) destCord = 0;
        if(destCord > galleryW - screen.width) destCord = galleryW - screen.width;
        smoothScroll(destCord);
        break;
      }
    }
  }

  function clearClass (){
    for (let i = 0; i < ul.children.length; i++) {
      let li = ul.children[i];
      if( li.classList.contains('active')){
        li.classList.remove('active');
      }
    }
  }

  let timerID;
  function smoothScroll (destCord){
    let time = 50;
    let distance = Math.abs(gallery.scrollLeft - destCord);
    let step = Math.ceil(distance / time);
    step = (gallery.scrollLeft < destCord) ? step : -step;
    if (programScroll) clearTimeout(timerID);
    timerID = setTimeout(function tick() {
      programScroll = true;
      if ( Math.abs(gallery.scrollLeft - destCord) > Math.abs(step) ) {
        gallery.scrollLeft += step; 
        timerID = setTimeout(tick, 0);
      } else {
        gallery.scrollLeft = destCord; 
        programScroll = false;
        return;
      }    
    }, 0);
  }
}());

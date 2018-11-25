(function(){
  const ul = document.querySelector('ul.examples-work-menu ');

  ul.onclick = function(e){
    const newLi = e.target;
    if(newLi.tagName !== 'LI') return;
    for (let i = 0; i < ul.children.length; i++){
      let li = ul.children[i];
      if (li.classList.contains('active')){
        li.classList.remove('active');
      }
    }
    newLi.classList.add('active');
  }
}());
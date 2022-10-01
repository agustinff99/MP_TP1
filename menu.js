(function(){
  const openButton = document.querySelector('.nav_menu');
  const menu = document.querySelector('.nav_link');
  const closeMenu = document.querySelector('.nav_cierre');

  openButton.addEventListener('click', ()=>{
      menu.classList.add('nav_link--hamburguesa');
  });

  closeMenu.addEventListener('click', ()=>{
      menu.classList.remove('nav_link--hamburguesa');
  });

  


})();
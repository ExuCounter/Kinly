let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.header-menu');

burgerMenu.addEventListener('click', ()=>{
    if(!(menu.classList.contains('active'))){
        menu.classList.add('active');
        burgerMenu.classList.add('active');
    }
    else{
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
})

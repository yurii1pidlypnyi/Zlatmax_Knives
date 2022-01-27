//Burger menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.navbar');
let body = document.body;
if(burger){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  })
}
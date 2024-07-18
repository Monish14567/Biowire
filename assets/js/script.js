const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-active');
const iconClose = document.querySelector('.icon-close');
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('material2'); 
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('material2'); 
    navbar.classList.remove('active');
}

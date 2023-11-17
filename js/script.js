const typed = new Typed('.multiple-text', {
    strings: ['Adobe Photoshop', 'Adobe indesign', 'Corel Draw', 'Illusrator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let navbar = document.querySelector('.header__menu');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    navbar.classList.toggle('menu__active');
}



let changeIcon = function(icon) {
    icon.classList.toggle('fa-times');
}

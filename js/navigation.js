//Gestion de menu toggle en Mobile
let toggle = document.getElementById('menu-toggle');
console.log(toggle);
toggle.addEventListener('click', function(){
    let navbar = document.querySelector('#navigation');
    let sidebar = document.querySelector('#sidebar');
    console.log(navbar);
navbar.classList.toggle("mobile-visible");
sidebar.classList.toggle("mobile-visible");
});
let burger = document.querySelector('#icon-burger');
let sidebar = document.querySelector('.sidebar')
let navigation = document.querySelector('#nav-list');
let navbar = document.querySelector('#navbar');
let socialHeader = document.querySelector('#social-header');

burger.addEventListener('click', function(){
   burger.classList.toggle('active-burger');
   navigation.classList.toggle('active');
   sidebar.classList.toggle('active-sidebar');
   navbar.classList.toggle('active');
  socialHeader.classList.toggle('active');
 })
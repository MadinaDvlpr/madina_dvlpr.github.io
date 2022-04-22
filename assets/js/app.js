const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".nav-logo");

hamburger.addEventListener("click", function(){
     logo.classList.toggle("hide");
   navLinks.classList.toggle("open");
   links.forEach(link => {
    link.classList.toggle("fade");
   });
 });



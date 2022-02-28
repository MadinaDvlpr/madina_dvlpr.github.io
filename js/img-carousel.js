const track = document.querySelector('.carousel_track');
const slides = track.children;
const nextBtn = document.querySelector('.carousel_button-right');
const prevBtn = document.querySelector('.carousel_button-left');
const bulletNav = document.querySelector('.carousel_nav');
// const bullets = bulletNav.children;

const slideWidth = slides[0].clientWidth;
console.log(slideWidth);
//placer les slides les une à coté des autres

 slides[0].style.left = slideWidth*0+'px';
slides[1].style.left = slideWidth*1+'px';
slides[2].style.left = slideWidth*2+'px';

// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth *slides.indexOf(slide) +'px';
// });

const timeout = 4000,
      prev = document.querySelector('#prev'),
      next = document.querySelector('#next'),
      slides = document.querySelectorAll('.slide');
let dots;

let currentSlide = 1;

function slideTo(direction){
    //je check que l'index est bien compris dans mon nombree de slide au total
    currentSlide = index >= slides.length || index < 1 ? 0 : index;
    slides.forEach(slide=> slide.style.tranform =`translateX({currentSlide}+100%)`);
    // currentSlide = currentSlide + direction;
    // if(currentSlide<0){
    //     currentSlide = slides.length -1;
    // }

    // if(currentSlide > slides.length -1){
    //     currentSlide =1;
    // }
 }



 prev.addEventListener('click', slideTo(-1));
 next.addEventListener('click', slideTo(1));
 
 setInterval(slideTo, timeout);
 




  let icon1 = document.getElementById('icon-one');
  icon1.addEventListener('click', function(){
    icon1.classList.toggle('active-one');
  });
  
  let icon2 = document.getElementById('icon-two');
  icon2.addEventListener('click', function(){
    icon2.classList.toggle('active-two');
  });
  let icon3 = document.getElementById('icon-three');
  icon3.addEventListener('click', function(){
    icon3.classList.toggle('active-three');
  });

  let icon2 = document.getElementsByClassName('.icon-two');
  let icon3 = document.getElementsByClassName('.icon-three');

  // $(document).ready(function() {
//     $('.icon-one').click(function() {
//       $('.icon-one').toggleClass('active-one');
//     });
//     $('.icon-two').click(function() {
//       $('.icon-two').toggleClass('active-two');
//     });
//     $('.icon-three').click(function() {
//       $('.icon-three').toggleClass('active-three');
//     });
//   })


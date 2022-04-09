// Gestion des boîtes modales
console.log('test micro');



function openModal (){ 
var modals = document.querySelector('modal');
  console.log(modals);
  target.style.display = null; //va retirer le display none
  target.removeAttribute('aria-hidden'); //j'affiche la modale
  target.setAttribute('aria-modal', 'true'); //j'ajoute l'attribut aria modal true à mon élément
}

var jsModals =document.querySelectorAll("js-modal");
jsModals.forEach(a =>{
a.addEventListener('click', openModal())})
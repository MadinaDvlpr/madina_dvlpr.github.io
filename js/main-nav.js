let displayPage = function(a){
    var li = a.parentNode;
    // console.log(li)
    var div =a.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(div)
  
//verifier si la classe n'est pas déja active sur le lien cliqué et je ne fais rien si c le cas
if(li.classList.contains('active')){
    return false;
}else{
  
   //retirer la class active des elements tabs (li) de la div conteneur
    div.querySelector('.nav-btns.active').classList.remove('active');

    //j'ajoute la classe active au li cliqué
    li.classList.add('active');

//retirer la class active des elements contenu de la div conteneur
div.querySelector('.page-content.active').classList.remove('active');


    //j'ajoute la class active des elements contenu de la div conteneur qui
    div.querySelector(a.getAttribute('href')).classList.add('active');
}
}


let navBtns = document.querySelectorAll('.nav-btns a');
for(let i=0; i< navBtns.length; i++){
    navBtns[i].addEventListener('click', function(e){
      
        displayPage(this);
        console.log("clicked")
    })

};

var hash = window.location.hash;
var a = document.querySelector('a[href="'+hash+'"]');
if (a !==null && a.parentNode.classList.contains('active')){
displayPage(a);
}
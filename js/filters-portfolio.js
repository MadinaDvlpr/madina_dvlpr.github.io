// let displayPage = function(a){
//     var li = a.parentNode;
//     // console.log(li)
//     var div =a.parentNode.parentNode.parentNode.parentNode.parentNode;
//     console.log(div)
  
// //verifier si la classe n'est pas déja active sur le lien cliqué et je ne fais rien si c le cas
// if(li.classList.contains('active')){
//     return false;
// };
  
//    //retirer la class active des elements tabs (li) de la div conteneur
//     div.querySelector('.nav-btns .active').classList.remove('active');

//     //j'ajoute la classe active au li cliqué
//     li.classList.add('active');

// //retirer la class active des elements contenu de la div conteneur
// div.querySelector('.page-content.active').classList.remove('active');


//     //j'ajoute la class active des elements contenu de la div conteneur qui
//     div.querySelector(a.getAttribute('href')).classList.add('active');
// }

// let navBtns = document.querySelectorAll('.nav-btns a');
// for(let i=0; i< navBtns.length; i++){
//     navBtns[i].addEventListener('click', function(e){
      
//         displayPage(this);
//         console.log("clicked")
//     })

// };

// var hash = window.location.hash;
// var a = document.querySelector('a[href="'+hash+'"]');
// if (a !==null && a.parentNode.classList.contains('active')){
// displayPage(a);
// }
let filters = document.querySelectorAll('.filter');
let projects = document.querySelectorAll('.portfolio-item');


for(let i = 0; i < filters.length; i++){

    filters[i].addEventListener('click', function(e){
// e.preventDefault();
       let filterId = this.dataset.tags;
       console.log(filterId);
        for(let j = 0; j< filters.length; j++){
             //je retire la classe active du filtre actuel
            filters[j].classList.remove('active');
        }
//j'ajoute la classe active au filtre selectionné
        this.classList.add('active');


//je parcours le tableaux des projets
        for(let k = 0; k < projects.length; k++){
            projects[k].classList.remove('delete');

            console.log(projects);
            //je récupère les tags de chaque projet
        let targetData = projects[k].dataset.tags;
        console.log(targetData);

   //projects.forEach(project => {

       //je compare les tags projet à l'id du filtre
        if(targetData.includes(filterId)){
            
            console.log(projects);
            //les tags projets contiennent l'id du filtre, j'affiche le projet
          projects[k].classList.add('active'); 
        }else{
             
            projects[k].classList.add('delete');
        }

}
    }
    )};   


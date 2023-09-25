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


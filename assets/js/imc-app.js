function calculate(){
      var bmi;
      var result = document.getElementById('result-summary');
      var height = parseInt(document.getElementById('height').value);
      var weight = parseInt(document.getElementById('weight').value);
      var category = document.getElementById('category');
      // var selectWoman = document.getElementById('female');
      var inputSexe = document.querySelectorAll('.input-sexe').value;
      console.log(inputSexe);
      // console.log(height);
      const weightSnap = document.getElementById('weight-val');
      const heightSnap = document.getElementById('height-val');
      // var resultSnap = document.getElementById('result-summary');

      //updating weight and height field as we indicate a value
      weightSnap.textContent = weight + " kg";
      heightSnap.textContent = height + " cm";
  

      //IMC = poids en kg/taille² (en m) math pow pour le la taille au carré et on arrondi avec toFixed() à 1 seul chiffre après kla virgule
      bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
      //With the help of "textContent" we have arranged to display in the result page of BMI
        // parseInt(bmi);
      // console.log(typeof(bmi));
      category.textContent = bmi;


if(inputSexe == "female"){
  switch (true){
    case (bmi < 18.5):
      result.textContent = "Underweight 😒" ;
     
      // result.style.color = "#FB2576";
    break;
    case (bmi >= 18.5 && bmi <= 24.9 ):
      result.textContent = "Normal Weight 😍";
      // result.style.color = "#0be881";
    break;
    case (bmi >= 25 && bmi < 29):
      result.textContent = "Overweight 😮";
      // result.style.color = "#ff884d";
    break;
    case (bmi >= 29 && bmi < 39):
      result.textContent = "Obese 😱";
      // result.style.color = "#ff5e57";
    break;
    case (bmi > 39):
      result = "Deadly Obese 🥵";
      // result.style.color = "#F17752";
    break;
}

}else{
  switch (true){
    case (bmi < 20):
      result.textContent = "Underweight 😒" ;
     
      // result.style.color = "#FB2576";
    break;
    case (bmi >= 20 && bmi < 25 ):
      result.textContent = "Normal Weight 😍";
      // result.style.color = "#0be881";
    break;
    case (bmi >= 25 && bmi < 30):
      result.textContent = "Overweight 😮";
      // result.style.color = "#ff884d";
    break;
    case (bmi >= 30 && bmi < 40):
      result.textContent = "Obese 😱";
      // result.style.color = "#ff5e57";
    break;
    case (bmi > 40):
      result = "Deadly Obese 🥵";
      // result.style.color = "#F17752";
    break;
}
}


  
// switch pour homme
// switch (true){
//   case (bmi < 20):
//     result.textContent = "Underweight 😒" ;
   
//     // result.style.color = "#FB2576";
//   break;
//   case (bmi >= 20 && bmi <= 25 ):
//     result.textContent = "Normal Weight 😍";
//     // result.style.color = "#0be881";
//   break;
//   case (bmi > 25 && bmi <= 30):
//     result.textContent = "Overweight 😮";
//     // result.style.color = "#ff884d";
//   break;
//   case (bmi > 30 && bmi <= 40):
//     result.textContent = "Obese 😱";
//     // result.style.color = "#ff5e57";
//   break;
//   case (bmi > 40):
//     result = "Deadly Obese 🥵";
//     // result.style.color = "#F17752";
//   break;
// }

//All of the above text is stored in "category".

//Now you have to make arrangements to display the information in the webpage with the help of "textContent" 

  }
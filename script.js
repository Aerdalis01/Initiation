console.log("connecté!");

let titre = document.getElementById("titre")
titre.style.color = "green";

// Je sélectionne
//ici votre cotre
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
//console.log(btnRed, "bonton rouge");
//console.log(btnBlue, "bouton bleu");
let compteur = 0;
//console.log(compteur, "compteur au démarrage");
//Je stocke
//ici votre code
btnRed.addEventListener('click',function(){
  //console.log('cliqué');
  //Je soumets l'élément à une action
  //ici votre code
  add();
    //console.log(compteur, "compteir après incrémentation");
});

//je soumets le cercle bleu à une action
btnBlue.addEventListener('click',function(){
  add();
  //console.log(compteur, "compteur après incrémentation");
});

function add(){
  compteur += 1;
  console.log(compteur, "compteur après incrémentation");
  titre.innerText = compteur;
}
add();

setTimeout (function(){
  //action à réaliser
  //à la fin du délais
  console.log('fin du chrono')
  btnRed.remove();
  btnBlue.remove();
}, 10000);
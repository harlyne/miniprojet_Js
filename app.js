//keydown evebnt permettant la recuperation des valeurs saisies au clavier
//chaque  touche a un key code genre son identifiant
// dataset attribut permetant d'attacher des valeurs  a un element du code js
//[...document.querySelectorAll('.bouton')]; c'est pour recuperer les elements du DOM sous forme de tableau
//listeKeycode = touches.map(touche => touche.dataset.key); permet de prendre les elements du tableau,de faire klk chose dessus et de renvoyer le resultat sous forme d'un nouveau tableau
//
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
//afficher toutes les valeurs sur l'ecran
//nou
const ecran = document.querySelector('.ecran');
//recuperation de la valeur au click de la touche
document.addEventListener('keydown',(e) => {
    const valeur = e.Keycode.toString();
    // to string est utilise ici car les elements du tableau sont de type chaine 
    console.log(valeur, typeof valeur)
}
)
//trget permet de recuperer la valeur du datakey 
document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
   
})


//fonction calculer permet de reprendre le code du keycode de la touche appuyée
const calculer =(valeur) =>{
if(listeKeycode.includes(valeur)){
    //include permet de verifier si l'element selectioné est bien presente sur la liste du tableau,si oui ca s'execute

    switch(valeur){
case'8':
ecran.textContent = "";
//pour quand on efface , on voit plus ce qui a ete effacé sur l'ecran
break;
case'13':
//eval permet d'evaluer le code represente sous forme de chaine de caractere
//cest aussi pour donner des resultat
const calcul = eval(ecran.textContent);
ecran.textContent = calcul;
break;
default:
    const indexKeycode = listeKeycode.indexOf(valeur);
    const touche = touches[indexKeycode];
    ecran.textContent += touche.innerHTML;
    //cest pour afficher les chiffres sur l'ecran
    }
}
} 

//pour afficher les erreurs
window.addEventListener('error', (e) => {
    alert('ERREUR !!! Veuillez bien revoir votre calcul:'+ e.message)
})
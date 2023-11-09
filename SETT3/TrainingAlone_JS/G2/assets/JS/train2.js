//ESORCICCIOOOO
console.log('*DOM traversing e manipulation*');
//Selezionare Id,stamparlo e formatta prop CSS stile
document.getElementById('test').innerHTML = 'Hello World!';
document.getElementById('test').style.color = 'red';
document.getElementById('test').style.fontSize = '50px';

console.log('*Metodi e proprietà di JS*');
//Creiamo nuovo elemento di lista 
function myFunction() {
    var x = document.createElement("LI");
    var t = document.createTextNode("Coffee");
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
}
//Selezioniamo elem secondo una classe HTML
const collec = document.getElementsByClassName('example color');
collec[0].style.backgroundColor = "violet";
//Selezioniamo elem tramite Id e aggiungiamo una classe
document.getElementById('nomeId').className = 'nuovaClasse';
//Selezioniamo elem con una classe 
document.querySelector('.nomeClasse').style.color = 'blue';
//Selezioniamo tutti gli elem con una stessa classe
const nodeList = document.querySelectorAll(".paraclass");
nodeList[0].style.backgroundColor = "orange";
nodeList[1].style.backgroundColor = "grey";
nodeList[2].style.backgroundColor = "green";
//Crea nuovi elementi di pagina dimanici
const newDiv = document.createElement("div");
const body = document.querySelector('body');
newDiv.innerText = 'nuovo contenuto testuale';
newDiv.style.backgroundColor = 'pink';
body.appendChild(newDiv);

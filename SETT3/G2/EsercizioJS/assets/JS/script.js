
/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {}

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {}

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {}

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {}

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {}

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {}

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {}

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {}

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {}

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {}

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {}

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {}

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {}

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

/* const deleteVowels = function () {} 
*/


console.log("*Spread operator*");
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

console.log("*Rest parameter*");
function somma(...numeri){
    return numeri.reduce((accum,elem) =>accum + elem,0) 
}
const x = somma(10,20,30,40,50);
console.log(x);

console.log("*Destructuring Operator-costante*");
const persona = {nome:'Aldo'};
const {nome} = persona;
console.log(nome);
console.log("*Destructuring Operator-array*");
const misure = [10,20];
const [altezza,larghezza] = misure;
console.log(altezza,larghezza);

console.log("*Backtick*");
const testoSuPiuRighe = `Lorem Ipsum è un testo segnaposto 
utilizzato nel settore della tipografia 
e della stampa.`;
console.log(testoSuPiuRighe);

console.log("*String Interpolation*");
let firstName = 'John'
let lastName = 'Doe'
let text = `Welcome ${firstName},${lastName}!`;
console.log(text);

console.log("*Metodo String JS*");
const str = 'Sto imparando JS';
console.log(str.startsWith('JS'));
console.log(str.endsWith('JS'));
console.log(str.includes('JS'));

console.log("*Metodi degli Array*");
const fruits = ['Banana','Orange','Apple'];
console.log(fruits.length);

const stringa = fruits.toString();
console.log(stringa);

const stringa1 = fruits.join('*');
console.log(stringa1);

const stringa2 = fruits.pop();
console.log(fruits);

const stringa3 = fruits.push('Kiwi');
console.log(fruits);

const stringa4 = fruits.shift();
console.log(stringa4);

const stringa5 = fruits.unshift('Lemon');
console.log(fruits);

fruits[0] = 'Kiwi';
console.log(fruits);

const myGirls = ['Aria', 'Luce'];
const myBoys = ['Emil', 'Tobia', 'Tom'];
const myChild = myGirls.concat(myBoys);
console.log(myChild);

const cars = ['Toyota','Alfa','Hundai'];
let removed = cars.splice(1,0,'Panda','Citroen'); 
console.log(cars);
cars.splice(0,2);
console.log(cars);

const motors = cars.slice(1);
console.log(motors);























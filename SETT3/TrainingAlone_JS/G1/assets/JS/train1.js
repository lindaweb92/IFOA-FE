// ESORCICCIOOOOO

//ECMA SCRIPT 6
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

console.log("*Cicli degli Array*");
/*array.forEach(function(currentValue, index, arr){ 
thisValue})*/
let sum = 0; // esempio 1: calcola la somma
const numbers = [65, 44, 12, 4];
numbers.forEach(
    function myFunction(item) {
  sum += item;
})
console.log(sum);
// esempio 2: moltiplica ogni elemento 
const numbers1 = [65,44,12,4]; 
numbers1.forEach(
    function myFunction(item,index,arr){
        arr[index] = item*10;
 })
console.log(numbers1);

const numbers2 = [45,4,9,16,25];
const quadrati = numbers2.map(function (elem){
       return elem*elem;
})
console.log(quadrati);
  
const age = [15,33,16,40];
const result = age.filter(function (elem){
    return elem >=18;
})
console.log(result);

//il risultato è la somma di tutti i numeri array
const totMoltipl = numbers2.reduce((totale,
    valoreCorrente)=>totale + valoreCorrente,0)
console.log(totMoltipl);
//i numeri sono tutti >10? ---> false
const test = numbers2.every(elem => elem > 10)
console.log(test);
//esistono alcuni numeri >10? ---> true
const test1 = numbers2.some(elem => elem > 10)
console.log(test1);
//ritorna l'indice dell'elemento cercato
const pets = ['cane','gatto','coniglio'];
const test2 = pets.indexOf('coniglio')
console.log(test2);
//trova il 1°elem <10
const test3 = numbers2.find(elem => elem <10)
console.log(test3);
//ritorna la posizione del 1°elem <10
const test4 = numbers2.findIndex(elem => elem <10)
console.log(test4);
//ordina matrice in ordine alfabetico
const stringa6 = pets.sort();
console.log(stringa6);
//ordina e poi inverte l'ordine
const stringa7 = pets.reverse();
console.log(stringa7);

















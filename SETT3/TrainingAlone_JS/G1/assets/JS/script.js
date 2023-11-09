// ESORCICCIOOOOO

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
























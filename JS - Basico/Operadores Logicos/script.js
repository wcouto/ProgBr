// Comparacao de idade
var idade = 20;
var maior20 = idade >= 20;
var menor30 = idade <= 30;

console.log("Maior que vinte ", maior20);
console.log("Menor que trinta ", menor30);
console.log("Entre 20 e 30 ", maior20 && menor30);

// Logica de gratuidade, menor que 10 e maior que 65

var idade2 = 9;
var menor10 = idade2 <= 10;
var maior65 = idade2 >= 65;

console.log("Maior que 65 ", maior65);
console.log("Menor que 10 ", menor10);
console.log("Tem direito a gratuidade?", menor10 || maior65);

let nombre1 = prompt(" Entrer le premier nombre");
let nombre2 = prompt("Entrer le deuxieme nombre");
const num1 = Number ("nombre1");
const num2 = Number ("nombre2");

const somme = num1 + num2;
const difference = num1 - num2;
const produit = num1 * num2;

const division = num2 !== 0 ? num1 / num2 : "Impossible (division par zéro)";


console.log("Somme :", somme);
console.log("Différence :", difference);
console.log("Produit :", produit);
console.log("Division :", division);
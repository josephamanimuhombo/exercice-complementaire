let montant = prompt("Entrer le montant de votre achat");
montant = Number(montant);
let remise = 0;
if (montant < 50) {
    remise = 0;
}
else if (montant >= 50 && montant <= 100){
    remise = 0.15; 
}
else if(montant > 200) {
    remise = 0.20;
}

let montantfinal = montant - (montant* remise);

console.log("Montant initial:, montant");
console.log("Remise appliquée :", remise * 100 + "%");
console.log("Montant final :", montantfinal); 
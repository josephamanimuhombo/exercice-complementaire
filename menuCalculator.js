let choix = prompt(
  "Choisissez une option :\n1 Addition\n2 Soustraction\n3 Multiplication\n4 Division\n0 Quitter"
);

if (choix == "0") {
  console.log("Programme terminé.");
} else if (choix == "1") {
  let a = Number(prompt("Entrez le premier nombre :"));
  let b = Number(prompt("Entrez le deuxième nombre :"));
  console.log("Résultat :", a + b);
} else if (choix == "2") {
  let a = Number(prompt("Entrez le premier nombre :"));
  let b = Number(prompt("Entrez le deuxième nombre :"));
  console.log("Résultat :", a - b);
} else if (choix == "3") {
  let a = Number(prompt("Entrez le premier nombre :"));
  let b = Number(prompt("Entrez le deuxième nombre :"));
  console.log("Résultat :", a * b);
} else if (choix == "4") {
  let a = Number(prompt("Entrez le premier nombre :"));
  let b = Number(prompt("Entrez le deuxième nombre :"));
  if (b == 0) {
    console.log("Impossible de diviser par zéro.");
  } else {
    console.log("Résultat :", a / b);
  }
} else {
  console.log("Option invalide");
}

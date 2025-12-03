let temperature = prompt("Entrer la temperature");
temperature = Number(temperature);

if (temperature < 0) {
  console.log("Il gèle");

} else if (temperature >= 0 && temperature <= 15) {
  console.log("Froid");

} else if (temperature >= 16 && temperature <= 25) {
  console.log("Agréable");

} else if (temperature >= 26 && temperature <= 35) {
  console.log("Chaud");
} else if (temperature > 35) {
  console.log("Canicule");
}

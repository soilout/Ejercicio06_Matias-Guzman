var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var pasos = "";
console.log("b.");
if (cantidadDeGatos === 0) console.log("🙀");
else {
    for (var ii = 1; ii < cantidadDePasos + 1; ii++) pasos += "🐾";
    for (var i = 1; i < cantidadDeGatos + 1; i++) {
        console.log("Gato #" + i +": 🐈" + pasos);
    }
}
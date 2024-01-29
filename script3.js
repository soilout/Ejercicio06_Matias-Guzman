var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var pasos = "";
console.log("c.");
if (cantidadDeGatos === 0) console.log("🙀");
else {
    for (var ii = 0; ii < cantidadDePasos; ii++) pasos += "🐾";
    for (var i = 1; i < cantidadDeGatos + 1; i++) {
        if (i % 2 === 0) console.log("Gato #" + i +": 🐈" + "⬛" + pasos);
        else console.log("Gato #" + i +": 🐈" + pasos);
    }
}
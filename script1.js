var cantidadDeGatos = 10;
var gato = ["😺", "😸", "😹"];
var u = 0;
console.log("a.");
if (cantidadDeGatos === 0) console.log("🙀");
else {
    for (var i = 1; i < cantidadDeGatos + 1; i++) {
        console.log("Gato #" + i + ": " + gato[u]);
        if (u === 2) u = 0;
        else u++
    }
}

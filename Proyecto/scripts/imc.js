function calcularIMC() {
    var peso = prompt("Introduce tu peso en kg:");
    var altura = prompt("Introduce tu altura en cm:");
    
    if (peso == null && altura == null) {
        return;

    }
    
    if (isNaN(peso) || isNaN(altura)) {
        alert("Debes introducir valores numéricos.");
        return calcularIMC();
    }

    if (peso <= 0 || altura <= 0) {
        alert("Los valores deben ser mayores.");
        return calcularIMC();
    }

    var imc = peso / Math.pow(altura / 100, 2);
    imc = imc.toFixed(2);

    var resultado;
    if (imc < 16) {
        resultado = "Infrapeso (delgadez severa)";
    } else if (imc < 17) {
        resultado = "Infrapeso (delgadez moderada)";
    } else if (imc < 18.5) {
        resultado = "Infrapeso (delgadez aceptable)";
    } else if (imc < 25) {
        resultado = "Peso normal";
    } else if (imc < 30) {
        resultado = "Sobrepeso";
    } else if (imc < 35) {
        resultado = "Obeso (Tipo I)";
    } else if (imc < 40) {
        resultado = "Obeso (Tipo II)";
    } else {
        resultado = "Obeso (Tipo III)";
    }

    document.getElementById("resultado").innerHTML = "<h4>Calculadora de IMC</h4><p>Tu IMC es: " + imc + " - " + resultado + "</p>";
}

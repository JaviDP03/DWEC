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

    if (peso <= 0 || altura <= 0 || peso > 500 || altura > 300) {
        alert("Los valores no son válidos.");
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

    var total = "<h4>Calculadora de IMC</h4><p>Tu IMC es: " + imc + " - " + resultado + "</p><hr>";
    total += resultado == "Infrapeso (delgadez severa)" ? "<strong><p>Infrapeso (delgadez severa) &lt; 16</p></strong>" : "<p>Infrapeso (delgadez severa) &lt; 16</p>";
    total += resultado == "Infrapeso (delgadez moderada)" ? "<strong><p>Infrapeso (delgadez moderada) 16 - 16.99</p></strong>" : "<p>Infrapeso (delgadez moderada) 16 - 16.99</p>";
    total += resultado == "Infrapeso (delgadez aceptable)" ? "<strong><p>Infrapeso (delgadez aceptable) 17 - 18.49</p></strong>" : "<p>Infrapeso (delgadez aceptable) 17 - 18.49</p>";
    total += resultado == "Peso normal" ? "<strong><p>Peso normal 18.5 - 24.99</p></strong>" : "<p>Peso normal 18.5 - 24.99</p>";
    total += resultado == "Sobrepeso" ? "<strong><p>Sobrepeso 25 - 29.99</p></strong>" : "<p>Sobrepeso 25 - 29.99</p>";
    total += resultado == "Obeso (Tipo I)" ? "<strong><p>Obeso (Tipo I) 30 - 34.99</p></strong>" : "<p>Obeso (Tipo I) 30 - 34.99</p>";
    total += resultado == "Obeso (Tipo II)" ? "<strong><p>Obeso (Tipo II) 35 - 39.99</p></strong>" : "<p>Obeso (Tipo II) 35 - 39.99</p>";
    total += resultado == "Obeso (Tipo III)" ? "<strong><p>Obeso (Tipo III) &gt; 40</p></strong>" : "<p>Obeso (Tipo III) &gt; 40</p>";

    document.getElementById("resultado").innerHTML = total;
}

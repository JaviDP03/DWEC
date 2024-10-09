function calcularCategoria() {
    var annoNacimiento = prompt("Introduce tu año de nacimiento:");
    if (annoNacimiento == null) {
        return;
    }

    if (isNaN(annoNacimiento)) {
        alert("Debes introducir un año válido.");
        return calcularCategoria();
    }

    if (annoNacimiento < 1905) {
        alert("El año debe ser mayor.");
        return calcularCategoria();
    }

    var annoActual = new Date().getFullYear();
    var edad = annoActual - annoNacimiento;
    var categoria;

    if (edad < 6) {
        alert("El año no es adecuado.");
        return calcularCategoria();
    } else if (edad < 9) {
        categoria = "Prebenjamín";
    } else if (edad < 11) {
        categoria = "Benjamín";
    } else if (edad < 13) {
        categoria = "Alevín";
    } else if (edad < 15) {
        categoria = "Infantil";
    } else if (edad < 17) {
        categoria = "Cadete";
    } else if (edad < 20) {
        categoria = "Juvenil";
    } else {
        categoria = "Senior";
    }

    var resultado = "<p>Tu categoria es " + categoria + "</p><hr>";
    resultado += categoria == "Prebenjamín" ? "<strong><p>Prebenjamín 6-8 años</p></strong>" : "<p>Prebenjamín 6-8 años</p>";
    resultado += categoria == "Benjamín" ? "<strong><p>Benjamín 9-10 años</p></strong>" : "<p>Benjamín 9-10 años</p>";
    resultado += categoria == "Alevín" ? "<strong><p>Alevín 11-12 años</p></strong>" : "<p>Alevín 11-12 años</p>";
    resultado += categoria == "Infantil" ? "<strong><p>Infantil 13-14 años</p></strong>" : "<p>Infantil 13-14 años</p>";
    resultado += categoria == "Cadete" ? "<strong><p>Cadete 15-16 años</p></strong>" : "<p>Cadete 15-16 años</p>";
    resultado += categoria == "Juvenil" ? "<strong><p>Juvenil 17-19 años</p></strong>" : "<p>Juvenil 17-19 años</p>";
    resultado += categoria == "Senior" ? "<strong><p>Senior 20 años en adelante</p></strong>" : "<p>Senior 20 años en adelante</p>";

    document.getElementById("resultado").innerHTML = resultado;
}
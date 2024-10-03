function calcularFCM() {
    var edad = prompt("Introduce tu edad:");
    var sexo = prompt("Introduce tu sexo (H/M):");

    if (edad == null && sexo == null) {
        return;
    }

    if (isNaN(edad) || (sexo != "H" && sexo != "M")) {
        alert("Debes introducir valores válidos.");
        return calcularFCM();
        
    }
     if (edad <= 0) {
        alert("La edad debe ser mayor.");
        return calcularFCM();
     }

     var fcm;
     if (sexo == "H") {
        fcm = 220 - edad;
     } else {
        fcm = 226 - edad;
     }
}
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
   if (edad <= 0 || edad > 120) {
      alert("La edad no es válida.");
      return calcularFCM();
   }

   var fcm;
   if (sexo == "H") {
      fcm = 220 - edad;
   } else {
      fcm = 226 - edad;
   }

   var resultado = "Tu frecuencia cardíaca máxima es: " + fcm + " pulsaciones por minuto.<br>" +
      "<ul><li>Zona de recuperación: " + fcm * 0.6 + " - " + fcm * 0.7 + "ppm.</li>" +
      "<li>Zona aeróbica: " + fcm * 0.7 + " - " + fcm * 0.8 + "ppm.</li>" +
      "<li>Zona anaeróbica: " + fcm * 0.8 + " - " + fcm * 0.9 + "ppm.</li>" +
      "<li>Línea roja: " + fcm * 0.9 + " - " + fcm + "ppm.</li></ul>";

   document.getElementById("resultado").innerHTML = resultado;
}
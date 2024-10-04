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
    var categorias = ["Prebenjamín", "Benjamín", "Alevín", "Infantil", "Cadete", "Juvenil", "Senior"];
}
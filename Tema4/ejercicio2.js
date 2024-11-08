var paises = ["España", "Francia", "Italia", "Portugal", "Alemania", "Estados Unidos", "Sudáfrica", "Japón", "China", "Brasil"];

function menuPaises() {
    let opcion = parseInt(prompt("Introduce una opción: \n1. Mostrar número paises\n2. Mostrar listado paises\n3. Mostrar intervalo\n4. Añadir país\n" +
        "5. Borrar país\n6. Consultar país\n0. Salir"));

    switch (opcion) {
        case 1:
            document.getElementById("resultado").innerHTML = mostrarNumeroPaises(paises);
            break;
        case 2:
            document.getElementById("resultado").innerHTML = mostrarPaises(paises);
            break;
        case 3:
            document.getElementById("resultado").innerHTML = mostrarIntervalo(paises);
            break;
        case 4:
            añadirPais(paises);
            break;
        case 5:
            borrarPais(paises);
            break;
        case 6:
            document.getElementById("resultado").innerHTML = consultarPais(paises);
            break;
        default:
            break;
    }
}

function mostrarNumeroPaises(arrayPaises) {
    let resultado;

    resultado = "<h2>Mostrar número de paises</h2>";
    resultado += "<p>" + arrayPaises.length + "</p>";

    return resultado;
}

function mostrarPaises(arrayPaises) {
    let resultado;
    let opcion = parseInt(prompt("Introduce una opción: \n1. Orden del array\n2. Del revés\n3. Alfabéticamente\n0. Salir"));


    resultado = "<h2>Mostrar listado paises</h2>";
    resultado += "<ul>";

    switch (opcion) {
        case 1:
            for (let i = 0; i < arrayPaises.length; i++) {
                resultado += "<li>" + arrayPaises[i] + "</li>";
            }
            break;
        case 2:
            for (let i = arrayPaises.length - 1; i >= 0; i--) {
                resultado += "<li>" + arrayPaises[i] + "</li>";
            }
            break;
        case 3:
            arrayPaises.sort();
            for (let i = 0; i < arrayPaises.length; i++) {
                resultado += "<li>" + arrayPaises[i] + "</li>";
            }
            break;
        default:
            break;
    }

    resultado += "</ul>";

    return resultado;
}

function mostrarIntervalo(arrayPaises) {
    let resultado;
    let inicio = parseInt(prompt("Introduce el inicio"));
    let fin = parseInt(prompt("Introduce el fin"));

    resultado = "<h2>Mostrar listado paises</h2>";
    resultado += "<ul>";

    for (let i = inicio; i <= fin; i++) {
        resultado += "<li>" + arrayPaises[i] + "</li>";
    }

    resultado += "</ul>";

    return resultado;
}

function añadirPais(arrayPaises) {
    let pais = prompt("Introduce un país");
    let posicion = parseInt(prompt("1. Principio\n2. Final"));

    switch (posicion) {
        case 1:
            arrayPaises.unshift(pais);
            break;
        case 2:
            arrayPaises.push(pais);
            break;
        default:
            break;
    }

    return menuPaises();
}

function borrarPais(arrayPaises) {
    let posicion = parseInt(prompt("Borrar:\n1. Principio\n2. Final\n"));

    switch (posicion) {
        case 1:
            arrayPaises.shift();
            break;
        case 2:
            arrayPaises.pop();
            break;
        default:
            break;
    }

    return menuPaises();
}

function consultarPais(arrayPaises) {
    let resultado;
    let posicion;
    let pais;
    let opcion = parseInt(prompt("Introduce una opción: \n1. Buscar país\n2. Buscar posición"));

    switch (opcion) {
        case 1:
            pais = prompt("Introduce un país");
            posicion = arrayPaises.indexOf(pais);
            break;
        case 2:
            posicion = parseInt(prompt("Introduce una posición"));
            pais = arrayPaises[posicion];
            break;
        default:
            break;
    }

    resultado = "<h2>Consultar un país</h2>";
    resultado += "<p>Posición: " + posicion + "</p>";
    resultado += "<p>País: " + pais + "</p>";

    return resultado;
}
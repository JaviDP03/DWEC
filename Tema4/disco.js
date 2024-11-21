function Disco() {
    // Propiedades
    this.nombre = "";
    this.autor = "";
    this.anno = 0;
    this.tipo = "";
    this.localizacion = 0;
    this.prestado = false;

    // Métodos
    this.cambiarPropiedades = function (nombre, autor, anno, tipo, localizacion) {
        this.nombre = nombre;
        this.autor = autor;
        this.anno = anno;
        this.tipo = tipo;
        this.localizacion = localizacion;
    }

    this.cambiarLocalizacion = function (localizacion) {
        this.localizacion = localizacion;
    }

    this.cambiarPrestado = function (prestado) {
        this.prestado = prestado;
    }

    this.mostrar = function () {
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Autor: " + this.autor + "<br>");
        document.write("Año: " + this.anno + "<br>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Localización: " + this.localizacion + "<br>");
        document.write("Prestado: " + (this.prestado ? "Sí" : "No") + "<br>");
    }
}
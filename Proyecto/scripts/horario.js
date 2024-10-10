function imprimirHorario() {
    // Función para crear el horario de mañana
    function horarioMañana() {
        var horario = "<table><tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";
        horario += "<tr><td>9:00-11:00</td><td>Tenis</td><td>Tenis</td><td>Tenis</td><td>Tenis</td><td>Tenis</td></tr>";
        horario += "<tr><td>11:00-13:00</td><td>Padel</td><td>Padel</td><td>Padel</td><td>Padel</td><td>Padel</td></tr>";
        horario += "<tr><td>13:00-15:00</td><td>Fútbol</td><td>Fútbol</td><td>Fútbol</td><td>Fútbol</td><td>Fútbol</td></tr></table>";

        return "<h3>Horario de mañana</h3>" + horario;
    }

    // Función para crear el horario de tarde
    function horarioTarde() {
        var horario = "<table><tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th><th>Domingo</th></tr>";
        horario += "<tr><td>16:00-17:00</td><td>Baloncesto</td><td>Baloncesto</td><td>Baloncesto</td><td>Baloncesto</td><td>Baloncesto</td><td>Baloncesto</td><td>Baloncesto</td></tr>";
        horario += "<tr><td>17:00-18:00</td><td>Voleibol</td><td>Voleibol</td><td>Voleibol</td><td>Voleibol</td><td>Voleibol</td><td>Voleibol</td><td>Voleibol</td></tr>";
        horario += "<tr><td>18:00-19:00</td><td>Rugby</td><td>Rugby</td><td>Rugby</td><td>Rugby</td><td>Rugby</td><td>Rugby</td><td>Rugby</td></tr>";
        horario += "<tr><td>19:00-20:00</td><td>Bádmiton</td><td>Bádmiton</td><td>Bádmiton</td><td>Bádmiton</td><td>Bádmiton</td><td>Bádmiton</td><td>Bádmiton</td></tr>";
        horario += "<tr><td>20:00-21:00</td><td>Atletismo</td><td>Atletismo</td><td>Atletismo</td><td>Atletismo</td><td>Atletismo</td><td>Atletismo</td><td>Atletismo</td></tr></table>";
        
        return "<h3>Horario de tarde</h3>" + horario;
    }

    // Resultado
    document.getElementById("resultado").innerHTML = horarioMañana() + "<br>" + horarioTarde();
}
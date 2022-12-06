document.querySelector("#btn-iniciar-act").addEventListener("click", () => {
    addRow();
});

const addRow = () => {
    let row = document.createElement("tr");
    let fecha = document.createElement("td");
    let horaInicio = document.createElement("td");
    let horaFin = document.createElement("td");
    let tiempo = document.createElement("td");
    let actividad = document.createElement("td");
    let area = document.createElement("td");
    let estado = document.createElement("td");
    let usuario = document.createElement("td");

    //const fechaText = document.createTextNode(`05-12-22`);
    //fecha.appendChild(fechaText);
    addTextToColumn(fecha, `05-12-22`);
    addTextToColumn(horaInicio, `21:00`);
    addTextToColumn(horaFin, `-`);
    addTextToColumn(tiempo, `2h 46'`);
    addTextToColumn(actividad, `Desarrollo web`);
    addTextToColumn(area, `Programación`);
    addTextToColumn(estado, `En curso`);
    addTextToColumn(usuario, `Cris`);


    row.appendChild(fecha);
    row.appendChild(horaInicio);
    row.appendChild(horaFin);
    row.appendChild(tiempo);
    row.appendChild(actividad);
    row.appendChild(area);
    row.appendChild(estado);
    row.appendChild(usuario);
    
    document.querySelector("#main-table").appendChild(row);
};

    const boton = document.getElementById('btn-detener-act');

    var msg = function() {
        alert("Hola")
    };
    boton.addEventListener('click', msg);

    var addTextToColumn = (column, text) => {
        const columnText = document.createTextNode(text);
        column.appendChild(columnText);
    };




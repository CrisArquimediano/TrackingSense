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

    //hardcodeado, la idea es recibir el input del usuario para completar la fila con los datos
    //Idea: al apretar el botón para iniciar una nueva actividad, una fila (formulario) para completar se pone en primer
    //plano. Por detrás, cuando se termina de completar, se toma el input y se agrega finalmente la fila con este método addRow()
    //Lo que ahora está hardcodeado será input del usuario que se debe tomar de ese form (fila que se muestra para completar)
    //En primer lugar, realizar con éxito el tomar el input y agregar la fila, luego se verán el estilo y los efectos

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

    var addTextToColumn = (column, text) => {
        const columnText = document.createTextNode(text);
        column.appendChild(columnText);
    };



//Sin implementar
const boton = document.getElementById('btn-detener-act');
var msg = function() {
    alert("Detener Actividad: Aún sin implementar")
};
boton.addEventListener('click', msg);



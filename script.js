var fechaInput, horaInicioInput, horaFinInput, tiempoInput, actividadInput, areaInput, estadoInput, usuarioInput

document.querySelector("#btn-iniciar-act").addEventListener("click", () => {
    addTask()
})

const addTask = () => {
    getInput()
    addRow()
}

const getInput = () => {

    fechaInput = document.getElementById("fecha-input").value
    horaInicioInput = document.getElementById("hora-inicio-input").value
    horaFinInput = document.getElementById("hora-fin-input").value
    tiempoInput = document.getElementById("tiempo-transcurrido").value
    actividadInput = document.getElementById("actividad-input").value
    areaInput = document.getElementById("area-input").value
    estadoInput = document.getElementById("estado-input").value
    usuarioInput = document.getElementById("usuario-input").value
}

const addRow = () => {
    let row = document.createElement("tr")
    let fecha = document.createElement("td")
    let horaInicio = document.createElement("td")
    let horaFin = document.createElement("td")
    let tiempo = document.createElement("td")
    let actividad = document.createElement("td")
    let area = document.createElement("td")
    let estado = document.createElement("td")
    let usuario = document.createElement("td")
    
    addTextToColumn(fecha, fechaInput)
    addTextToColumn(horaInicio, horaInicioInput)
    addTextToColumn(horaFin, horaFinInput)
    addTextToColumn(tiempo, tiempoInput)
    addTextToColumn(actividad, actividadInput)
    addTextToColumn(area, areaInput)
    addTextToColumn(estado, estadoInput)
    addTextToColumn(usuario, usuarioInput)


    row.appendChild(fecha)
    row.appendChild(horaInicio)
    row.appendChild(horaFin)
    row.appendChild(tiempo)
    row.appendChild(actividad)
    row.appendChild(area)
    row.appendChild(estado)
    row.appendChild(usuario)
    
    document.querySelector("#main-table").appendChild(row)
}

var addTextToColumn = (column, text) => {
    const columnText = document.createTextNode(text)
    column.appendChild(columnText)
}



//Sin implementar
const boton = document.getElementById('btn-detener-act')
var msg = function() {
    alert("Detener Actividad: Aún sin implementar")
};
boton.addEventListener('click', msg)



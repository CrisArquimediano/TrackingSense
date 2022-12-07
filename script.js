var fechaInput, horaInicioInput, horaFinInput, tiempoInput, actividadInput, areaInput, estadoActividad, usuarioInput

document.querySelector("#btn-iniciar-act").addEventListener("click", () => {
    showHideTable()
})

document.querySelector('#boton-agregar-actividad').addEventListener("click", () => { 
    //Poner para que agregue una sola vez la actividad
    //Hacer que no agregue una fila vacía o incompleta (exceptuando el tiempo total que se cierra cuando se detiene la actividad
    //y se actualiza mientras transcurre el tiempo)
    //Hacer que se pueda cancelar
    //Deshabilitar los botones de 'Iniciar Actividad' y 'Detener Actividad' mientras se usa esta parte
    if (getInput()) {
        addRow()
        showHideTable()
    } else {
        alert("Completar todos los campos, por favor.")
    }

})

const submitForm = () => {
    if (getInput()) {
        addRow()
        showHideTable()
        alert("Funciono")
    }
}

const showHideTable = () => {
    console.log("Me oculto o me muestro")
    const table = document.getElementById("input-table")
    
    if (table.style.display === 'none') { 
        table.style.display = 'block'
    } else if (table.style.display === 'block') {
        table.style.display = 'none'
    } else {
        table.style.display = 'block'
    }  
}

const getInput = () => {

    getDateAndHour()

    horaFinInput = `-` //ingresar tiempo local una vez terminada la actividad
    tiempoInput = `-` //calcular entre tiempo fin y tiempo inicio para obtener el tiempo total
    //O mejor aun, que se vaya actualizando el tiempo mientras transcurre, quizás de a minuto
    actividadInput = document.getElementById("actividad-input").value
    areaInput = document.getElementById("area-input").value
    estadoActividad = "En curso" // hacer que dependa de los botones 'Iniciar Actividad' y 'Detener Actividad'
    usuarioInput = document.getElementById("usuario-input").value

    if (actividadInput === "" || areaInput === "" || usuarioInput === "") {
        return false
    } else {
        return true
    }
}

const getDateAndHour = () => {
    let date = new Date()

    //Fecha
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let fechaString = [year, month, day].join('-')
    fechaInput = fechaString

    //Hora
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let horaString = [hour, minute, second].join(':')
    horaInicioInput = horaString
}

const addRow = () => {
    console.log("Agrego la fila")
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
    addTextToColumn(estado, estadoActividad)
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



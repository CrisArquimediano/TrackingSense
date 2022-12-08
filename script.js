var fechaInput, horaInicioInput, horaFinInput, tiempoInput, actividadInput, areaInput, estadoActividad, usuarioInput
var dateInicio, dateFin

document.querySelector("#btn-iniciar-act").addEventListener("click", () => {
    document.getElementById("input-table").style.display = 'block'
    document.getElementById("btn-iniciar-act").disabled = true
    document.getElementById('btn-detener-act').disabled = false 
})

document.querySelector('#boton-agregar-actividad').addEventListener("click", () => { 
    if (getInput()) {
        addRow()
        document.getElementById("input-table").style.display = 'none'
    } else {
        alert("Completar todos los campos, por favor.")
    }
})

const getInput = () => {

    getDateAndHour()

    horaFinInput = `-` 
    tiempoInput = `-`  //Mejorar para que se vaya actualizando el tiempo mientras transcurre, quizás de a minuto
    actividadInput = document.getElementById("actividad-input").value
    areaInput = document.getElementById("area-input").value
    estadoActividad = "En curso" 
    usuarioInput = document.getElementById("usuario-input").value

    if (actividadInput === "" || areaInput === "" || usuarioInput === "") {
        return false
    } else {
        return true
    }
}

const getDateAndHour = () => {
    dateInicio = new Date()

    //Fecha
    let year = dateInicio.getFullYear()
    let month = dateInicio.getMonth() + 1
    let day = dateInicio.getDate()
    let fechaString = [year, month, day].join('-')
    fechaInput = fechaString

    //Hora
    let hour = dateInicio.getHours()
    let minute = dateInicio.getMinutes()
    let second = dateInicio.getSeconds()
    let horaString = [hour, minute, second].join(':')
    horaInicioInput = horaString
}

var contadorIds = 0;
var idEstado, idHoraFin, idTiempo

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

    idEstado = 'estado-actividad' + contadorIds
    idHoraFin = 'hora-fin' + contadorIds
    idTiempo = 'tiempo' + contadorIds

    contadorIds++
    estado.setAttribute('id', idEstado)
    horaFin.setAttribute('id', idHoraFin)
    tiempo.setAttribute('id', idTiempo)   
   
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


//////////////////////////////////////////      Detener Actividad       //////////////////////////////////////////////
const boton = document.getElementById('btn-detener-act')
var detenerActividad = () => {
    //Se cambia el estado
    document.getElementById("btn-iniciar-act").disabled = false
    boton.disabled = true
    document.getElementById("input-table").style.display = 'none'

    document.getElementById(idEstado).innerHTML = "Finalizado"

    //Se ingresa hora fin
    dateFin = new Date()
    let horaFin = dateFin.getHours()
    let minutoFin = dateFin.getMinutes()
    let segundoFin = dateFin.getSeconds()
    let horaString = [horaFin, minutoFin, segundoFin].join(':')
    document.getElementById(idHoraFin).innerHTML = horaString

    //Se calcula el tiempo transcurrido
    let hour = horaFin - dateInicio.getHours()
    let minute = minutoFin - dateInicio.getMinutes()
    let second = segundoFin - dateInicio.getSeconds()
    let tiempo = [hour + 'h', minute + '\'', second + '"'].join(' ')
    document.getElementById(idTiempo).innerHTML = tiempo

}
boton.addEventListener('click', detenerActividad)



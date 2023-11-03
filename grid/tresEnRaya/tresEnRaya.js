let victorias1 = 0
let victorias2 = 0
let totalPartidas = 0
let turnoJugador = 1
let cuentaMov = 0
let victoriaJugador1 = false
let victoriaJugador2 = false

function verificaVictoria1(){
    let arrElem = document.getElementsByClassName("casilla")
    if(arrElem[0].style.backgroundColor === "green" && arrElem[1].style.backgroundColor === "green" && arrElem[2].style.backgroundColor === "green" ||
        arrElem[3].style.backgroundColor === "green" && arrElem[4].style.backgroundColor === "green" && arrElem[5].style.backgroundColor === "green" ||
        arrElem[6].style.backgroundColor === "green" && arrElem[7].style.backgroundColor === "green" && arrElem[8].style.backgroundColor === "green" ||
        arrElem[0].style.backgroundColor === "green" && arrElem[3].style.backgroundColor === "green" && arrElem[6].style.backgroundColor === "green" ||
        arrElem[1].style.backgroundColor === "green" && arrElem[4].style.backgroundColor === "green" && arrElem[7].style.backgroundColor === "green" ||
        arrElem[2].style.backgroundColor === "green" && arrElem[5].style.backgroundColor === "green" && arrElem[8].style.backgroundColor === "green" ||
        arrElem[1].style.backgroundColor === "green" && arrElem[5].style.backgroundColor === "green" && arrElem[8].style.backgroundColor === "green" ||
        arrElem[2].style.backgroundColor === "green" && arrElem[5].style.backgroundColor === "green" && arrElem[7].style.backgroundColor === "green"){
            victoriaJugador1 = true
        }
}

function reiniciaPartida(){
    let casillas = document.getElementsByClassName("casilla")
    for(let casilla of casillas){
        casilla.style.backgroundColor = "#808080"
    }
    cuentaMov = 0
    victoriaJugador1 = false
    victoriaJugador2 = false
    document.getElementById("felicitacion").textContent = ""
    document.getElementById("reinicioPart").disabled = true
}
function selecciona(elemento){
    if(!(elemento.style.backgroundColor === ("green") || elemento.style.backgroundColor === ("red")) && !victoriaJugador1 && !victoriaJugador2){
        elemento.style.backgroundColor = turnoJugador === 1? "green" : "red"
        turnoJugador = turnoJugador === 1 ? 2 : 1 
        cuentaMov += 1
        verificaVictoria1()
        if(victoriaJugador1){
            totalPartidas += 1
            victoriaJugador1 += 1
            turnoJugador = 2
            document.getElementById("numPar").textContent = totalPartidas
            document.getElementById("vict1").textContent = victoriaJugador1
            document.getElementById("felicitacion").textContent = "Victoria del Jugador 1 !!!"
            document.getElementById("reinicioPart").disabled = false
    }
    }
    if(cuentaMov === 9){
        // reiniciaPartida()
        totalPartidas += 1
        turnoJugador = 1
        document.getElementById("numPar").textContent = totalPartidas
        document.getElementById("felicitacion").textContent = "Empate !!"
        document.getElementById("reinicioPart").disabled = false
    } 
}
function reset(){
    reiniciaPartida()
    turnoJugador = 1
    victorias1 = 0
    victorias2 = 0
    totalPartidas = 0
    document.getElementById("vict1").textContent = victorias1
    document.getElementById("vict2").textContent = victorias2
    document.getElementById("numPar").textContent = totalPartidas
}

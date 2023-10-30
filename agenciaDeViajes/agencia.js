let solicitantes = []
function recogeInfo(){
    let obj = {}
    obj.nombre = document.getElementById("nombre").value
    obj.origen = document.getElementById("origen").value
    obj.destino = document.getElementById("destino").value
    obj.numeroPersonas = document.getElementById("persons").value
    obj.fecha = document.getElementById("fecha").value
    solicitantes.push(obj)
    document.getElementById("nombre").value = ""
    document.getElementById("origen").value = ""
    document.getElementById("destino").value = ""
    document.getElementById("persons").value = ""
    document.getElementById("fecha").value = ""
}
function filtra(){
    let filtArr = solicitantes.filter(elem => /canarias/i.test(elem.destino) || /galicia/i.test(elem.destino) || /mallorca/i.test(elem.destino))
    // console.log(filtArr);
    for(let solicitante of filtArr){
        let nuevoElemento = document.createElement("p")
        for(let atr in solicitante){
            nuevoElemento.textContent += `${atr}: ${solicitante[atr]}, `
        }
        nuevoElemento.textContent = nuevoElemento.textContent.slice(0, -2)
        let divFilt = document.getElementById("filtrado").appendChild(nuevoElemento)
    }
    document.getElementById("filtrado").style.padding = "50px"
}
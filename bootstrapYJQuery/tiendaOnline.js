let listaCarrito = []

function actualizaListaCarrito(){
    $(".modal-body").append(`<div class="d-flex justify-content-between"><h6>${listaCarrito[listaCarrito.length -1].articulo}</h6><h6>${listaCarrito[listaCarrito.length -1].precio} €</h6></div>`)
    $("#numArt").html(listaCarrito.length)
}

function actualizaTotal(){
    let total = 0
    listaCarrito.forEach(elem => total += Number(elem.precio))
    $("#total").html(total)
}

jQuery(() => {

    $("#boton1").on("click", () => {
        let newArt = {articulo: $("#articulo1").html(), precio: $("#precio1").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })

    $("#boton2").on("click", () => {
        let newArt = {articulo: $("#articulo2").html(), precio: $("#precio2").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
    $("#boton3").on("click", () => {
        let newArt = {articulo: $("#articulo3").html(), precio: $("#precio3").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
    $("#boton4").on("click", () => {
        let newArt = {articulo: $("#articulo4").html(), precio: $("#precio4").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
    $("#boton5").on("click", () => {
        let newArt = {articulo: $("#articulo5").html(), precio: $("#precio5").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
    $("#boton6").on("click", () => {
        let newArt = {articulo: $("#articulo6").html(), precio: $("#precio6").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
    $("#boton7").on("click", () => {
        let newArt = {articulo: $("#articulo7").html(), precio: $("#precio7").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
    $("#boton8").on("click", () => {
        let newArt = {articulo: $("#articulo8").html(), precio: $("#precio8").html()}
        listaCarrito.push(newArt)
        actualizaListaCarrito()
        actualizaTotal()
    })
})

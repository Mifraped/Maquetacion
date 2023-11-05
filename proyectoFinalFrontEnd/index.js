import { Movie } from "./Movie.js"
let arrPelis = [
    new Movie("La vida de Brian", 1979, "Reino Unido", "Terry Jones", "Graham Chapman", "Comedia", '"./imagenes/la_vida_de_brian.jfif"')
]

jQuery(() => {

    $(function () {
        for (let peli of arrPelis) {
            let peliculaHtml = `<div class="card mb-3 bg-secondary d-flex justify-content-center align-items-center"
        style="max-width: 400px;">
        <div class="row g-0">
            <div class="col-md-4 ps-2 d-flex justify-content-center align-items-center foto">
                <img src="./imagenes/la_vida_de_brian.jfif" class="img-fluid rounded-start" alt="img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-black">${peli.title}</h5>
                    <h6 class="fs-6">Año: ${peli.releaseYear}</h6>
                    <h6 class="fs-6">Actores: John Cleese, Graham Chapman</h6>
                    <h6 class="fs-6">Nacionalidad: ${peli.nacionality}</h6>
                    <h6 class="fs-6">Director: ${peli.director}</h6>
                    <h6 class="fs-6">Guionista: ${peli.writer}</h6>
                    <h6 class="fs-6">Genero: ${peli.genre}</h6>
                </div>
            </div>
        </div>
    </div>`
            $(".contCuerpo").append(peliculaHtml)
        }
    })

    $("#boton").on("click", () => {

        let nuevaPeli = new Movie($("#nomPeli").val(), $("#anyoPeli").val(), $("#nacionPeli").val(), $("#dirPeli").val(), $("#guionPeli").val(), $("#generoPeli").val(), $("#urlPortada").val())
        arrPelis.push(nuevaPeli)
        $("input").val("")
        $(".contCuerpo").append(`<div class="card mb-3 bg-secondary d-flex justify-content-center align-items-center"
        style="max-width: 400px;">
        <div class="row g-0">
            <div class="col-md-4 ps-2 d-flex justify-content-center align-items-center foto">
                <img src="./imagenes/la_vida_de_brian.jfif" class="img-fluid rounded-start" alt="img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-black">${arrPelis[arrPelis.length - 1].title}</h5>
                    <h6 class="fs-6">Año: ${arrPelis[arrPelis.length - 1].releaseYear}</h6>
                    <h6 class="fs-6">Actores: John Cleese, Graham Chapman</h6>
                    <h6 class="fs-6">Nacionalidad: ${arrPelis[arrPelis.length - 1].nacionality}</h6>
                    <h6 class="fs-6">Director: ${arrPelis[arrPelis.length - 1].director}</h6>
                    <h6 class="fs-6">Guionista: ${arrPelis[arrPelis.length - 1].writer}</h6>
                    <h6 class="fs-6">Genero: ${arrPelis[arrPelis.length - 1].genre}</h6>
                </div>
            </div>
        </div>
    </div>`)
    })
})
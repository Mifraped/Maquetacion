import { Movie } from "./Movie.js"
import { Professional } from "./professional.js"

let arrPelis = [
    new Movie("La vida de Brian", 1979, ["John Cleese", "Terry Gilliam"],"Reino Unido", "Terry Jones", "Graham Chapman", "Comedia", "./imagenes/la_vida_de_brian.jfif"),
    new Movie("Regreso al futuro", 1985, ["Michael J. Fox, Christopher Lloyd"],"Estados Unidos", "Robert Zemeckis", "Robert Zemeckis", "Ciencia Ficcion", "./imagenes/regreso.jfif"),
    new Movie("As bestas", 2022, ["Luis Zahera", "Denis Menochet"],"España", "Rodrigo Sorogoyen", "Isabel Peña", "Drama", "./imagenes/bestas.jfif")
]

let arrProf = [
    new Professional("John Cleese", 84, "Britanica", 0, "Actor", "Si", "./imagenes/John_Cleese_(cropped).jpg"),
    new Professional("Christopher LLoid", 85, "Estadounidense", 0, "Actor", "Si", "./imagenes/Christopher_Lloyd_May_2015.jpg"),
    new Professional("Luis Zahera", 57, "Español", 0, "Actor", "No", "./imagenes/luis_zahera.jpg")
]

jQuery(() => {

    $(() => {
        for (let peli of arrPelis) {
            let arrActEsp = peli.actors.map(elem => " " + elem)
            $(".cuerpoPeli").append(`<div class="card mb-3 bg-secondary d-flex justify-content-center align-items-center mb-5"
                                        style="max-width: 400px;">
                                        <div class="row g-0">
                                            <div class="col-md-4 ps-2 d-flex justify-content-center align-items-center foto">
                                                <img src="${peli.photo}" class="img-fluid rounded-start" alt="img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-black">${peli.title}</h5>
                                                    <h6 class="fs-6">Año: ${peli.releaseYear}</h6>
                                                    <h6 class="fs-6">Actores: ${arrActEsp}</h6>
                                                    <h6 class="fs-6">Nacionalidad: ${peli.nacionality}</h6>
                                                    <h6 class="fs-6">Director: ${peli.director}</h6>
                                                    <h6 class="fs-6">Guionista: ${peli.writer}</h6>
                                                    <h6 class="fs-6">Genero: ${peli.genre}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`)
        }

        for(let prof of arrProf){
            $(".cuerpoProf").append(`<div class="card mb-3 bg-secondary d-flex justify-content-center align-items-center"
                                        style="max-width: 400px;min-height: 250px;">
                                        <div class="row g-0">
                                            <div class="col-md-4 ps-2 d-flex justify-content-center align-items-center foto">
                                                <img src="${prof.photo}" class="img-fluid rounded-start" alt="img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-black">${prof.name}</h5>
                                                    <h6 class="fs-6">Edad: ${prof.age}</h6>
                                                    <h6 class="fs-6">Nacionalidad: ${prof.nationality}</h6>
                                                    <h6 class="fs-6">Osacars: ${prof.oscarsNumber}</h6>
                                                    <h6 class="fs-6">Profesion: ${prof.profession}</h6>
                                                    <h6 class="fs-6">Esta retirado: ${prof.retirado}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`)
        }
    })


    $("#boton").on("click", () => {

        if($("#nomPeli").val() && $("#anyoPeli").val() && $("#actoresPeli").val() && $("#nacionPeli").val() && $("#dirPeli").val() && $("#guionPeli").val() && $("#generoPeli").val() && $("#urlPortada").val()){

            let arrAct = $("#actoresPeli").val().split(",")
            let arrActSinSpac = arrAct.map(elem => elem.trim())
            let arrActPrimEsp = arrActSinSpac.map(elem => " "+ elem)

            let nuevaPeli = new Movie($("#nomPeli").val(), $("#anyoPeli").val(), [...arrActPrimEsp],$("#nacionPeli").val(), $("#dirPeli").val(), $("#guionPeli").val(), $("#generoPeli").val(), $("#urlPortada").val())

            arrPelis.push(nuevaPeli)
            
            $(".contCuerpo").append(`<div class="card mb-3 bg-secondary d-flex justify-content-center align-items-center mb-5"
                                        style="max-width: 400px;">
                                        <div class="row g-0">
                                            <div class="col-md-4 ps-2 d-flex justify-content-center align-items-center foto">
                                                <img src="${arrPelis[arrPelis.length -1].photo}" class="img-fluid rounded-start" alt="img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-black">${arrPelis[arrPelis.length - 1].title}</h5>
                                                    <h6 class="fs-6">Año: ${arrPelis[arrPelis.length - 1].releaseYear}</h6>
                                                    <h6 class="fs-6">Actores: ${arrPelis[arrPelis.length -1].actors}</h6>
                                                    <h6 class="fs-6">Nacionalidad: ${arrPelis[arrPelis.length - 1].nacionality}</h6>
                                                    <h6 class="fs-6">Director: ${arrPelis[arrPelis.length - 1].director}</h6>
                                                    <h6 class="fs-6">Guionista: ${arrPelis[arrPelis.length - 1].writer}</h6>
                                                    <h6 class="fs-6">Genero: ${arrPelis[arrPelis.length - 1].genre}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`)

            $("input").val("")
        }else alert("Faltan campos por rellenar")

        
    })
})
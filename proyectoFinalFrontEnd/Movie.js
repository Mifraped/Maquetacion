export class Movie{

    title;
    releaseYear;
    // actors;
    nacionality;
    director;
    writer;
    genre;
    photo;

    constructor(title, releaseYear, nacionality, director, writer, genre, photo){
        this.title = title;
        this.releaseYear = releaseYear;
        // this.actors = actors
        this.nacionality = nacionality;
        this.director = director
        this.writer = writer
        this.genre = genre;
        this.photo = photo
    }

    toString(){
        console.log(this);
    }

}

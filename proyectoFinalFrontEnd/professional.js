export class Professional{
    constructor(name, age, nationality, oscarsNumber, profession, retirado, photo){
        this.name = name
        this.age = age
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
        this.retirado = retirado
        this.photo = photo
    }
    toString(){
        console.log(this);    
    }
}

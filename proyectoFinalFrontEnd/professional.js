class Professional{
    constructor(name, age, nationality, oscarsNumber, profession, photo){
        this.name = name
        this.age = age
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
        this.photo = photo
    }
    toString(){
        console.log(this);    
    }
}
module.exports = {Professional}
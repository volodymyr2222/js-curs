class Me extends Person {
    constructor (name, surname,midleName, curYear, yearOfBirth ) {
        super(name,surname);
        this.midleName = midleName
        this.curYear = curYear;
        this.yearOfBirth = yearOfBirth;
       
        }
        showFullName(midleName) {
           return `${this.name} ${this.surname} ${this.midleName}`
        }
        showAge(){
            let sum = this.yearOfBirth - this.curYear;
            return sum;
        }
    }
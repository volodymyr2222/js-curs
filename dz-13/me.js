class Me extends Person {
    constructor (name, surname, curYear, yearOfBirth) {
        super(name,surname);
        this.curYear = curYear;
        this.yearOfBirth = yearOfBirth;
        }
        showFullName(midleName) {
           return this.midleName = midleName;
        }
        showAge(){
            let sum = this.yearOfBirth - this.curYear;
            return `${this.name} ${this.surname} ${this.showFullName('ihorovich')} ${sum} `;
        }
    }
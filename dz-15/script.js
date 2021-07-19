class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.#experience;
    }
    get coff (){
     return this.#experience
    }
    set coff (value){
    this.#experience = value;
    }
}
let worker = new Worker('Кобак Юря', 15, 22);
let worker1 = new Worker('Іванів Володимир', 40, 22);
let worker2 = new Worker('Задерецький Андрій', 5, 22);
let worker3 = new Worker('Петро Цимбала', 20, 22);
worker1.coff = 2.5;
worker2.coff = 1.7;
worker3.coff = 1.5;
let personInfo = [worker3,worker1,worker2,worker];
personInfo.sort((a,b) => {
    return a.coff - b.coff;
});

for(let item of personInfo){
    console.log(`Робітник: ${item.fullName}, зарплата - ${item.showSalaryWithExperience()} $`)
}



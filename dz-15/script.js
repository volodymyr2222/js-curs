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
    get experience (){
     return this.#experience
    }
    set experience (value){
    this.#experience = value;
    }
}
let worker = new Worker('Кобак Юря', 15, 22);
let worker1 = new Worker('Іванів Володимир', 40, 22);
let worker2 = new Worker('Задерецький Андрій', 5, 22);
let worker3 = new Worker('Петро Цимбала', 20, 22);
worker1.experience = 2.5;
worker2.experience = 1.7;
worker3.experience = 1.5;

let personInfo = [worker3,worker1,worker2,worker];
personInfo.sort((a,b) => {
    return a.experience - b.experience
});
personInfo.filter((a) => {
    return a.personInfo > 500
})

for(let item of personInfo){
    console.log(`Робітник: ${item.fullName}, зарплата - ${item.showSalaryWithExperience()} $`)
}



//task-1 первернути слово
let flipTheText = 'hello';

let reverse = flipTheText.split('').reverse().join('');
console.log(reverse);


let reverseTwo = flipTheText.split('');
let rev = []
for(let i = 0; i < reverseTwo.length; i++){
   rev.unshift(reverseTwo[i])
}

console.log(rev.join(''))

//task-2 obj

const obj = {
    name: 'petro',
    age: 18,
    "surname" : "Ivanivv"
}

obj.name = 'vova'
obj['surname'] = 'Ivamiv'
obj.sex = 'man'



obj2 = obj;
obj2.age = 23;
obj2.name = 'Volodymyr'
obj2.bodyType = {
    spist: 175,
    wag: 65
}

console.log(obj2['bodyType']);


for(let key in obj){
    console.log(key + ': ' + obj[key])
}
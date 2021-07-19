const array = [1,2,3,4,5,6,7,9];
let a = 10;
function myFunc (){
    for(let key of array){
        if (key === a){
            return true
        }
    }
     return false
}
console.log(myFunc())



function myFunc1 (){
    const arr = [1,1,1,1,5,6,7,9];
    b = 11;
    for(let key of arr){
        if (key > b){
            return true
        } else {
           return false
        }
    }
     
}
console.log(myFunc1())
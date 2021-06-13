// Task-1 Метод розгортання масива

let arr = [1, 5, [333, 6], [8, [9]], 4, 101,];
let result = arr.flat(Infinity);
console.log(result);


// Task-2 Метод сортування 

let arrSort = [2,5,4,100,1,9,33,22]
// сортування по зростанню чисел
console.log(arrSort.sort(function(a,b){return a - b;}));

// сортування по зростанню чисел
console.log(arrSort.sort(function(a,b){ return b - a;})) 





// Task-3 збільшити кожен масив на 5,10 і посумувати його

let arrSum = [1,2,3,4,5,6];
let arrSumOme = arrSum.reduce(function(previsionValue, item){
    let a = item + 5;
    let b = a +previsionValue;
    return b
},0);
let arrSumTwo = arrSum.reduce(function(previsionValue, item){
    let a = item + 10;
    let b = a +previsionValue;
    return b
},0);

console.log("Збільшення кожного масиву на П'ЯТЬ - ", arrSumOme, "  і на ДЕСЯТЬ - ", arrSumTwo);







// ТОп 5 гірших
// delete
// toString
// indexOf
// lastindexOf
// some

// ТОп 5 ліпших
// sort
// flat
// map
// reduce
// concat



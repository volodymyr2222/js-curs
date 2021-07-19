// high order function

//
// function getUserName (surname){
//     return function(name){
//         return `Прізвище: ${surname}, ім'я: ${name}`;
//     }
// }
// let result = getUserName('Ivaniv')('Volodymyr');
// console.log(result);
//

// const arr = ['vova','petro','io'];


// function sort(arr, fn){
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(fn(arr[i]));
//     };
//     return newArr;
// }

// function toUpperCase(el){
//     return el.toUpperCase();
// }

// function elementSymbols(el){
//     return el.length;
// }

// let res = sort(arr, toUpperCase);
// let res2 = sort(arr, elementSymbols);
// console.log(res, res2);

// чиста функція 
// function sum (a){
//     return a * 5;
// }
// console.log(sum(1));
// console.log(sum(1));
// console.log(sum(1));


// side
// let a = prompt('');
//  function sum (){
//     return a * 5;
// }
// console.log(sum());
// console.log(sum());


// клоужер

// let Counter = (function () {
//     let counter = 1;
//     return function Increase () { 
//          return counter++ ;
//      };
//   })();

//   console.log(Counter());
//   console.log(Counter());
//   console.log(Counter());

//2 variant

// let counter = 0;
// function Counter (){
//   counter = counter + 1 ;
//   return counter;
// } 
// console.log(Counter());
// console.log(Counter());
// console.log(Counter());


  //
  // без рекурсія

  // const arr = [1,2,3,4,5,6,7,8,9,10]; 
  // let res = 0; 
  // function sum(){
  //     for (let i = 0; i < arr. length; i++) { 
  //     res += arr[i]; 
  // } 
  //   console.log(res);
  // }
  // sum();



// з рекурсією


//   let arr = [1,2,3,4,5,6,7,8,9,10]; 
//   let res = 0; 
//   let i = -1;
//   function sum(){
//     ++i
//     res += arr[i];
//     if(i >= arr.length -1){
//       return
//     }
//      sum();
//   }
//   sum();
// console.log(res)

  
  


  // let res = 0; 
  // function sum(){
  //     for (let i = 0; i <= 10; i++) { 
  //     res = res + i;
  // } 
  //   console.log(res);
  // }
  // sum();


  
//   let res = 0; 
//   let i = 0;
//   function sum(){
//       i++;
//        res = res + i;
//       if(i >= 10) return;
//     sum();
//   }
// sum();
// console.log(res);

// замикання 

// function sum () { 
//   return function (arr){
//      for (let i = 0; i <= arr.length; i++) {
//     if (i % 2 != 0) {
//       console.log(i + 5)
//     }
//   }
//   }
// }
// let result = sum();
// let result2 = result([1,2,3,4,5]);


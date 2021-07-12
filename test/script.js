// high order function

// function foo() { 
//     console.log('hello world')
// }
// foo();
// foo.field ='vova';
// console.log(foo.field);

// const arr = ['vova','kola','julia','masha'];
// const newArr = [];
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++){
//     newArr.push(arr[i].toUpperCase);
    
// };
// console.log(newArr,newArr2);



// function foo(arr, fn){
//     const res = [];
//     for (let i = 0; i < arr.length; i++){
//         res.push(fn(arr[i]));
//      };
//      return res;
// }
// function nameLangth(el){
//     return el.length;
// }
// function nameTo(el){
//     return el.toUpperCase();
// }

// const result = foo(arr,nameLangth);
// const result2 = foo(arr,nameTo);
// console.log(result,result2)


// function gret(firstName){
//     return function(lastName){
//         return `hello, ${firstName}, ${lastName}`
//     }
// }
// const result = gret('Vova')('Ivaniv')
// console.log(result)


// function question(job) {
//     if(job ==='developer'){
//         return function (name){
//             return `${name}, fdfdfdfdf`
//         } 
//     } else if (job === 'thecher'){
//         return function (name){
//             return `${name},11111`
//         }

//     }
// }
// const developerQve = question('developer');
// console.log(developerQve('ddd'));

// чисті функції


// function a(b) {
//     //
//     return b * 5
// }   
// console.log(a(5));
// console.log(a(5))
// console.log(a(5))

// рекурсия


// let a = 1;
// function rec(){ 
//     a++;
//     console.log(a)
//     if(a > 5){
//         return a;
//     }
//    rec()
// }
// rec()
let offset = 0;

    function move(){
        offset = offset + 20;
        document.querySelector('.block-1').style.right = offset + 'px';
        if(offset > 300){
            return true
        }
        setTimeout(move, 500)
        
}
document.querySelector('button').onclick = move;
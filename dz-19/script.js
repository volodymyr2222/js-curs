// Прототипи
// const a = form.querySelector('[name="step"]');

// function retriveFormValue(){
// const stepValue = a.value;
//     const b = new String (5);
//     const person = {
//     name: 'vova',
//     age: stepValue,
//     gret: function(){
//         console.log(person)
//     }

// }
        
        
//     }
// const obj = new Object({
//     name: 'dd',
//     grett: function(){
//         // console.log('person')
//     }
// })
 
// Object.prototype.sayHello = function(){
//     console.log(bb)
// }
// const bb = new String ('5');



//проміси
// const p = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         console.log('bla bla bla');
//         const a = {
//         server: 'ds',
//         port: 2000,
//         status: 'wokring'
//     }
//     resolve()
//     },2000)
    
// })
// p.then();

// function sum(){
//     let a = 0;
//     return function (){
//         return a += 1
//     }

// }
// let a = sum()
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());


// let add = (() =>{
//     let a = 1;
//     return function(){
//       console.log(a);
//     return a+=1
//     }
// })()

// console.log(add())
// console.log(add())
// console.log(add())

//===================================================================
// const p = new Promise(function(res,rej){
//     setTimeout(()=> {
//         console.log('ldldldld');
//         const backend = { 
//             server: 'aws',
//             post:2000,
//             status: 'working'
//         }
//         res(backend)
//     },2000)
// });
// p.then(data=> {
//     return p2 = new Promise((res,rej)=> {
//         setTimeout(()=> {
//             data.modified = true;
//             res(data)
//         }, 1000)
//     })
// })
// .then(mobData => {
//     mobData.from = 10;
//     return mobData
// }).then(data => {
//     console.log(data);
// }).catch(err => console.error('Error', err))
// .finally(()=> console.log('ssss'))


const slip = ms => {
   return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// slip(2000).then(() => console.log('dsdsds'))
// slip(2050).then(() => console.log('dsdsds'))
Promise.all([slip(2000),slip(3000)]).then(()=>{
    console.log('all');
})

Promise.race([slip(2000),slip(3000)]).then(()=>{
    console.log('alssl');
})

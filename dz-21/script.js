//Перший сайт!!!!!!
// const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3NlHJoHS5rNUD4oww2QwhGQgtNPjbor4";
// let obj;

// async function res (){
//     return await fetch(url)
//     .then((res) => res.json())
// }
// res().then((arr) =>{
//     obj = arr
    
// })
// setTimeout(()=> {

// })

function toBringOut_1(){
let random = Math.floor(Math.random() *(7 - -1));    
fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3NlHJoHS5rNUD4oww2QwhGQgtNPjbor4")
.then((res) => {return res.json()})
.then((r) => {document.querySelector('.block').innerHTML =r.results[random].title}) 
}
const valueName_1 = document.querySelector('.button1');
valueName_1.addEventListener('click', () => {
    toBringOut_1()
 
})


//Перший сайт!!!!!!
function toBringOut_2(){
fetch("https://api.chucknorris.io/jokes/random")
.then((res) => {return res.json()})
.then((r) => {document.querySelector('.block2').innerHTML = r.value})
}
const valueName_2 = document.querySelector('.button2');
valueName_2.addEventListener('click', () => {
    toBringOut_2()
 
})


//Перший сайт!!!!!!
function toBringOut_3(){
let random = Math.floor(Math.random() *(20 - -1));    
fetch("https://pokeapi.co/api/v2/pokemon/")
.then((res) => {return res.json()})
.then((r) => {document.querySelector('.block3').innerHTML = r.results[random].name});
}
const valueName_3 = document.querySelector('[name="qwe"]');
valueName_3.addEventListener('click', () => {
    toBringOut_3()
 
})

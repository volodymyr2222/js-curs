// Функція видалення гравця
   
// function delet() {
//   const {form} = document.forms;
//   var ind = form.querySelector('[name="idx"]')
//   var index = ind.value


//   function audit(indexx) {
//     if(indexx >= 0){
//      let b = footbalTeam.splice(index,1)
//     }
//   }
//   audit(index);
// }
// function valueArr() {
//   console.log(footbalTeam)
  
// }



// function submite(){
    
//   const form = document.getElementById('form')

//     function retriveFormValue(event){
//    event.preventDefault();

//     const name = form.querySelector('[name="name"]'),
//         surname = form.querySelector('[name="surname"]'),
//         age = form.querySelector('[name="age"]'),
//         number = form.querySelector('[name="number"]'),
//         roles = form.querySelector('[name="roles"]');
    
//         const val = {
//             name: name.value,
//             surname: surname.value,
//             age: age.value,
//             number: number.value,
//             roles: roles.value,
//             }
        
        
//         footbalTeam.push(val)
//         console.log(footbalTeam);
        
// }

// form.addEventListener('submit', retriveFormValue);  

// }
// submite();

// Функція добавляння гравця

// function submite(){
//   const {form} = document.forms;

//   function retrieveFormValue(event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const values = Object.fromEntries(formData.entries());

//     footbalTeam.push(values);
//     console.log(footbalTeam);
//   }
//   form.addEventListener('submit', retrieveFormValue);  
//   }
//   submite();
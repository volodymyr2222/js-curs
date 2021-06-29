var footbalTeam = [];
const form = document.getElementById('form');

function retriveFormValue(){

    const name = form.querySelector('[name="name"]'),
        surname = form.querySelector('[name="surname"]'),
        age = form.querySelector('[name="age"]'),
        number = form.querySelector('[name="number"]'),
        roles = form.querySelector('[name="roles"]');
    
        const valueAll = {
            name: name.value,
            surname: surname.value,
            age: age.value,
            number: number.value,
            roles: roles.value};

            footbalTeam.push(valueAll);
            console.log(footbalTeam);

              let personNumber = form.querySelector('[name="number"]').value
              for (let i = 0; i < footbalTeam.length - 1; i++) {
                let obj = footbalTeam[i];
                let valuesPersonNumber = obj.number;

                if (personNumber === valuesPersonNumber) {
                  footbalTeam.splice(footbalTeam.length - 1, 1);
                document.querySelector('.contaiter_text').innerHTML = "A player with this number already exists!!!";
                } else {
                  document.querySelector('.contaiter_text').innerHTML = "Player added!!!";
                }
              }
     
}


// Функція видалення гравця

function playerDelete() {

  let nameIndex = form.querySelector('[name="idx"]');
  let index = nameIndex.value - 1;
    if(index >= 0 && index < footbalTeam.length){
      
     footbalTeam.splice(index,1) ;
     document.querySelector('.contaiter_text').innerHTML = "";
   for (key of footbalTeam){
    let indexOutput = footbalTeam.indexOf(key);
    document.querySelector('.contaiter_text').innerHTML += ('Player:' + (indexOutput + 1)+  ' -');
    for (i in key){
      document.querySelector('.contaiter_text').innerHTML += (' ' + key[i] + ' ');
    }
    document.querySelector('.contaiter_text').innerHTML +=  ("<br/>");
  } 
 } else {
  document.querySelector('.contaiter_text').innerHTML = "Sorry, no one is registered under this number!!!";
 }
 
 console.log(footbalTeam)
}

// Функція виводу всіх гравців
function showAllPlayers() {
  document.querySelector('.contaiter_text').innerHTML = ' ';

  for(let i = 0; i < footbalTeam.length; i++){
    console.log(footbalTeam[i]);
  }
  for (key of footbalTeam){
    let arrayIndex = footbalTeam.indexOf(key);
    document.querySelector('.contaiter_text').innerHTML += ('Player:' + (arrayIndex + 1) + ' -');
    for (i in key){
      document.querySelector('.contaiter_text').innerHTML += (' ' + key[i] + ' ');
    }
    document.querySelector('.contaiter_text').innerHTML +=  ("<br/>");
  }

}
// Функція пошуку гравців по номеру 
function playerFindByNumber() {
      let valuePlayer = form.querySelector('[name="player"]');
      let playerNumber = valuePlayer.value;
      
      footbalTeam.filter((item) =>{
        if (item.number === playerNumber){
        return item.number === playerNumber;
        } else {
          document.querySelector('.contaiter_text').innerHTML = "Sorry, no one is registered under this number!!!";
        }
      }).forEach((item) => {
        console.log(item);
      document.querySelector('.contaiter_text').innerHTML = '';
      document.querySelector('.contaiter_text').innerHTML += ('Player:' + " -");
            for (i in item) {
                document.querySelector('.contaiter_text').innerHTML += (" " + ' ' + item[i] + '');   
            }
      })
    
}

// Функція редагування гравця 
function playerEdit() {
  
    const name = form.querySelector('[name="name"]'),
        surname = form.querySelector('[name="surname"]'),
        age = form.querySelector('[name="age"]'),
        number = form.querySelector('[name="number"]'),
        roles = form.querySelector('[name="roles"]');
    
        const valueAll = {
            name: name.value,
            surname: surname.value,
            age: age.value,
            number: number.value,
            roles: roles.value,
            };
      
          let valueIndexPlayer = form.querySelector('[name="indexPlayer"]');
          let index = valueIndexPlayer.value - 1;

          if(index >= 0 && index < footbalTeam.length){

          footbalTeam.splice(index,1,valueAll);
          let editItem = footbalTeam[index];
          document.querySelector('.contaiter_text').innerHTML = '';
          document.querySelector('.contaiter_text').innerHTML += ('Player:' +  ' -');
            for (i in editItem) {
                document.querySelector('.contaiter_text').innerHTML += (" " + ' ' + editItem[i] + '');
                
            }
          } else {
            document.querySelector('.contaiter_text').innerHTML = "Sorry, no one is registered under this number!!!";
           }
}





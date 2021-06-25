var footbalTeam = [];
const form = document.getElementById('form')
// Функція добавляння гравця

function submite(){
  const {form} = document.forms;
  function retrieveFormValue(event) {

    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
  
    footbalTeam.push(values)
    console.log(footbalTeam);
   
  }
  form.addEventListener('submit', retrieveFormValue);  
 
  }
  submite();

// Функція видалення гравця

function playerDelete() {

  var ind = form.querySelector('[name="idx"]')
  var index = ind.value
  function audit(indexx) {
    if(indexx >= 0){
     var b = footbalTeam.splice(index,1) 
     document.querySelector('.contaiter_text').innerHTML = ""
   for (key of footbalTeam){
    let a = footbalTeam.indexOf(key);
    document.querySelector('.contaiter_text').innerHTML += ('Player:' + a + ' -')
    for (i in key){
      document.querySelector('.contaiter_text').innerHTML += (' ' + key[i] + ' ')
    }
    document.querySelector('.contaiter_text').innerHTML +=  ("<br/>")
  } 
  }
 }
 
 audit(index); 
 console.log(footbalTeam)
}

// Функція виводу всіх гравців
function showAllPlayers() {
  document.querySelector('.contaiter_text').innerHTML = ' '

  for(let i = 0; i < footbalTeam.length; i++){
    console.log(footbalTeam[i])

  }
  
  for (key of footbalTeam){
    
    let a = footbalTeam.indexOf(key);
    document.querySelector('.contaiter_text').innerHTML += ('Player:' + a + ' -')
    for (i in key){
      document.querySelector('.contaiter_text').innerHTML += (' ' + key[i] + ' ')
    }
    document.querySelector('.contaiter_text').innerHTML +=  ("<br/>")
  }

}
// Функція пошуку гравців по номеру 
function playerFindByNumber(playerNumber) {

      // const {form} = document.forms;
      var ind = form.querySelector('[name="player"]')
      var playerNumber = ind.value
      
      var filter = footbalTeam.filter((item,index) =>{
        return item.number === playerNumber
      }).forEach((item,index) => {
        console.log(item)
        let a = footbalTeam.indexOf(key);
      
      document.querySelector('.contaiter_text').innerHTML = ''
      document.querySelector('.contaiter_text').innerHTML += ('Player:' + a)
            for (i in item) {
                document.querySelector('.contaiter_text').innerHTML += (" " + ' ' + item[i] + '')
                
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
    
        const val = {
            name: name.value,
            surname: surname.value,
            age: age.value,
            number: number.value,
            roles: roles.value,
            }
      
          var ind = form.querySelector('[name="indexPlayer"]')
          var index = ind.value
          
          let a  =  footbalTeam.splice(index,1,val)
          let b = a[0]
          console.log(a)
          
          document.querySelector('.contaiter_text').innerHTML = ''
          document.querySelector('.contaiter_text').innerHTML += ('Player:' + ' -')
            for (i in b) {
                document.querySelector('.contaiter_text').innerHTML += (" " + ' ' + b[i] + '')
                
            }
}




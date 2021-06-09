



function game(){
    let a = +prompt('введіть число від 0');
    let b = +prompt('введіть число до 10');
    let c = Math.floor(Math.random() * (a - b) + b);
    console.log(c)
     
    if(b <=0|| a===0){
    } else{
        
    }


    let d = 4;
    while(d >= 0){
    let x = +prompt(`в тебе залишилось: ${d}`)
    let z = x == c;
    if(z){
        alert('whin');break;
    } else if (z == 0){
        alert('ви програли');
    } else{
        break
    }
    d--;
    
}
    let f = confirm('Розпочати ще раз?')
    if(f == true){
        alert(f + game());
    } else if(f == false){
        
    }
    }

function game(){
    let a = prompt('введіть число від 0');
    if(a.trim() == ""){
        alert('Помилка це пуста строка');
        let f = confirm('Почати нову гру?');
        if(f){
            game()
        }else{ 
        }

    } else if(isNaN(parseInt(a))) {
        alert('Помилка це не цифра!!!')
        let f = confirm('Почати нову гру?');
        if(f){
            game()
        }else{}
    } else if(a <= 0){
        alert('Ведіть число від 0 ')
        let f = confirm('Почати нову гру?');
        if(f){
            game()
        }else{}
    } else {
    }

    let b = prompt('введіть число до 10');
    if(b.trim() == '' || isNaN(parseInt(b))){
        alert('помила')
        let f = confirm('Почати нову гру?');
        if(f){
            game()
        }else{}
    } else{
    }
    const n = b - 10;

    if(n != a){
        alert('Не вірний крок')
        let f = confirm('Почати нову гру?');
        if(f){
            game()
        }else{}
    } else{}

    let c = Math.floor(Math.random() * (+a - +b) + +b);
    console.log(c);
     
    



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


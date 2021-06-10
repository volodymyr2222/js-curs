// task-1
// let z = +prompt("Число ");
// let b = +prompt("Число ");
// let c = +prompt("Число ");

// alert(z + b + c + ' ' + typeof z);


// task-2

let number_one = prompt('Введіть будь-яке число-1'), number_two = prompt('Введіть будь-яке число-2'); 
let sum = number_one + number_two;


if (sum <= 0){

    alert('введіть число, більше 0');
} else if (sum.trim() == ""){
    alert('введіть якесь значення');

} else if (isNaN(parseInt(sum))){
    alert('Введіть цифри, а не букви!!');
}else{

let aa = +number_one + +number_two;
switch (aa){
    case 1:
    case 2:
    case 3:
    case 4:
        alert("від 1  "+ aa +"  до 4")
        break;
    case 5:
        alert("5 рівне "+ aa)
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        alert("від 6  "+ aa +"  до 9")
        break;
    case 10:
        alert("10 рівне " + aa)
        break;
    case 11:
    case 12:
    case 13:
    case 14:
        alert("від 11 "+ aa +" до 14")
    break;
    case 15:
        alert("15 рівне " + aa)
        break;
    default:
        alert(aa)

}
}


//  task


// let a = +prompt('Висота сторони');

// if(a > 0){
//     alert(((a * a) * 1.73205080756887) / 4);
// } else{
//     alert('NaN');
// }



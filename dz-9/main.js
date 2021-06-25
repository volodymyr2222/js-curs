let a =[1,3,4,5,6,8,0]

let sum = a.reduce((acc,item) => {
    if (item % 2!==0){
        return acc + item
    } 
    return acc
    
},0)
console.log(sum)
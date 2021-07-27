const time1 = form.querySelector('[name="time1"]'); 
const time2 = form.querySelector('[name="time2"]');
const step = form.querySelector('[name="step"]');

function retriveFormValue(){
     const stepValue = Number (step.value);
     const timeOne = time1.value.split('');
     const timeTwo = time2.value.split('');
        timeOne.splice(2,1);
        timeTwo.splice(2,1);
     let a = Number (timeOne.join('')); 
     let b = Number (timeTwo.join('')); 
        let arr = [];
        
    for(let i = a; i <= b; i++){

        let index = i.toString().length

    if(index === 4 ){
        let aa = +i.toString()[2];
        if(aa < 6){
            let res = i.toString().split('');
            res.splice(-2,0,':');
            let res2 = res.join('');
            arr.push(res2)
        }  
    }
    if(index === 3 ){
        let aa = +i.toString()[1];
        if(aa < 6){
        let res = i.toString().split('');
            res.splice(-2,0,':');
            res.splice(0,0,'0');
            let res2 = res.join('');
            arr.push(res2)
        }  
        }
    if(index === 2 ){
    let aa = +i.toString()[0];
        if(aa < 6){
            let res = i.toString().split('');
            res.splice(-2,0,':');
            res.splice(0,0,'00');
            let res2 = res.join('');
            arr.push(res2)
    }  
    }
    }
    for(let i = 0; i <= arr.length; i = i + stepValue){
    console.log(arr[i]);
    }
}



      
   


alert('ssssss')
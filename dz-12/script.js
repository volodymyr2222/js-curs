const name1 = form.querySelector('[name="date1"]'); 
const name2 = form.querySelector('[name="date2"]');
function retriveFormValue(){
    let res = new Date(name2.value).getDate() - new Date(name1.value).getDate()
        console.log(res);
}

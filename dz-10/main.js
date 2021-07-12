const obj = { 
    name: 'Volodymyr',
    surname: 'Ivaniv',
    fn: function(){
        console.log(result,result2)
    }
};
function reverss(){
    let newName = '';
    let newSurname = '';
    for (let i = this.name.length -1; i >= 0; i--){
        newName += this.name[i];
    };
    for (let i = this.surname.length -1; i >= 0; i--){
        newSurname += this.surname[i];
    };
    let result = newName.substring(1, newName.length-1);
    let result2 = newSurname.substring(1, newSurname.length-1);
    console.log(`name: ${result} , surname: ${result2}`);

}
// reverss.call(obj);
reverss.bind(obj)();
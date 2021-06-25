
var arr = [1,'str',true,false,null,Symbol('dsd'),undefined,12n,{name:'vova'}]
function sortElementsByType(){
    
    var obj = {
        number: [],
        string: [],
        boolean: [],
        null: [],
        symbol: [],
        undefined: [],
        bigInt: [],
        object: []
    }

  for(let key of arr){
      if(typeof(key) === 'bigint'){
          obj.bigInt.push(key)
      }
      if(typeof(key) === typeof(true)){
        obj.boolean.push(key)
    }
    if(key === null){
        obj.null.push(key)
    }
    if(typeof(key) == 'number'){
        obj.number.push(key)
    }
    if(typeof(key) == 'object'&& key !== null){
        obj.object.push(key)
    }
    if(typeof(key) == 'string'){
        obj.string.push(key)
    }
    if(typeof(key) == 'symbol'){
        obj.symbol.push(key)
    }
    if(typeof(key) == 'undefined'){
        obj.undefined.push(key)
    }
}


console.log(obj)
}
sortElementsByType(arr);






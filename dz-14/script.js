class GeometricFigure {
    constructor(){
    }
    getArea(){};
    toString(){};
}
class Triangle extends GeometricFigure{
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea(){
        let sum =  1 / 2 * this.a * this.b * Math.sin((this.c * Math.PI) / 180);
        return parseFloat(sum.toFixed());
        
    }
    toString(){
        return this.constructor.name;
    };
}
let triangle = new Triangle(20,20,20);

class Square extends GeometricFigure{
    constructor(a){
       super();
       this.a = a;
    }
    getArea(){
        return this.a * this.a;
    };
    toString(){
        return this.constructor.name;
    };
}
let square = new Square(20);

class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.r = r;
    }
    getArea(){
        let a = Math.PI * this.r;
        return parseFloat(a.toFixed());
    }
    toString(){
        return this.constructor.name;
    };
}
let circle = new Circle(20);
let arr = [triangle, square, circle];

function handleFigures(arr){
let result = arr.reduce((acc,curr) => {
    if(curr instanceof GeometricFigure){
        console.log(`${curr} - ${curr.getArea()}`);
}

return acc + curr.getArea();
},0);

console.log(result);
}

handleFigures(arr);
/*
OOPS in JS
Object
const variable = {
var1: 'value1',
var2: 'value2',
//methods inside object
getValue: function () {
    console.log(`value1 here`);
}
}

-- shallow copy arr2 = arr1, can affect changes make in arr2 to original array.
Object literals are not good for multiple object creation.
Factory function
-this can create object and use it as direct func or an object reference. 
Alternativer is Constructor Function 
    it will create function with arguments, and return the object.
    -name starts with caps letter. 
    function Name(a,b) {
    this.a = a;
    this.b=b;
    this.getAb = function() {
    console.log(a);
        };
    }

    const movie1 = new Name(a,b);
    movie1.getAb();


*/

function Movie(name) {
    this.name=name;
}

const m1 = new Movie("Robo");
console.log(m1.__proto__.__proto__.__proto__);

//  to get prototype of an object directly instead on __proto__
Object.getPrototypeOf(m1); 


// by default all the properties are present in the object prototype to avoid use below 

function Movie1(name) {
    this.name=name;
}

Movie1.prototype.getDetails = function() {
    console.log('Hello from prototype');
}

const m2 = new Movie1();
m2.getDetails();

// Object.create()
// Object.assign()
// Object.freeze()

//  Call, apply and bind methods in this

car = {
    name: 'car',
    color: 'red',
    getDetails(brand, seats) {
        console.log(
            `This is an ${this.color} ${this.name} of ${brand} company.
            It was a ${seats} seater.`);
    },
};

car.getDetails('Audi', 5);

bus = {
    name: 'bus',
    color: 'black',
}
// this is to use methods from different objects without creating them again
car.getDetails.call(bus, 'Volvo', 54);
car.getDetails.apply(bus, ['Ashok Leyland', 67]);
const veh1 = car.getDetails.bind(bus);
veh1('Benz', 45);



// Object Destructuring
// ** Any changes done after the destructuring will not change the results.
let obj = {
    a: 1,
    b: 2,
    c: [1,3,5,6],
    d: {value: 'Val'},
};

// using Binding pattern 

const {a: a1,b,c,d} = obj;
console.log(a1);
console.log(c);

// using assignment pattern

let b1;

({b:b1} = obj);
console.log(b1);

// Array Destructure
// ** we can destructure the array at any point of time

fruits = ['apple', 'kiwi', 'bananna','berry','mango', 'orange'];

// binding pattern

const [a,,ba] = fruits;
console.log(a);
console.log(ba);

// assignment pattern

const [ap, ki, ...f] = fruits;
console.log(ap);
console.log(ki);
console.log(f);

const [app, kiw, ...[,be,ma]] = fruits;

console.log(be);
console.log(ma);


// Exercies

user = {name: "Naveen", age: 27};
updates = { name: "Gomathi", city: "Ponneri"};

const usr = Object.assign(user, updates);

console.log(usr);
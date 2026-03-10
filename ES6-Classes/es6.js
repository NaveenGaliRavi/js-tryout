/*
ES6 is released on 2015

OOP
Inheritance
polymorphism
Encapsulation
Abstraction
Class and Instance

-- Constructor function and classes are same (functionally)

Encapsulation:
#propertyName - > to declare it as private property (cannot access directly outside the class)
#method()
Use getter and setters to access/assign private properties

Inheritance:::::
class classb extends classa {
}
use super to initialize the parent class constructor

constructor function inheritance
-it is complex compared to classes
-use function.call for properties and Object.create to link methods inside function to link with current functions. 

Static
-any class with static method/properties can be invoked only using its class name.

getters_setters 
-get property() {}
-set property(arug) {}

DateTime Parameters 
new Date();

regEx
-regex = new RegEx("pattern");
or - regex = /pattern/;
*/

// constructor function
function Machine(name, type, wheels){
    this.name = name;
    this.type = type;
    this.wheels = wheels;

    this.getDetails = function() {
        console.log(`This is an ${this.name} with type of ${this.type} with ${this.wheels} wheels.`);
    }
}

Machine.prototype.getalert = function() {
    console.log('Alert from Machine constructor function prototype');
}

const veh1 = new Machine("Tractor", "Agri", 3);

veh1.getDetails();
veh1.getalert();

// Class Expression (similar to function)
const vehe = class {

}

// Class Declaration
class MachineCl {
    // properties
    name;
    type;
    wheels;

    // constructor
    constructor(name, type, wheels) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
    }


    // methods (prototyped method)
    getDetails() {
        console.log(`This is an ${this.name} with type of ${this.type} with ${this.wheels} wheels.`);
    }
}

// Here we are calling the constructor function with calss name 
const veh2 = new MachineCl("JCB", "Constructon", 4);
console.log(veh2);
veh2.getDetails();


// inheritance in constructor function
function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}

Vehicle.prototype.getDetails = function() {
    console.log(`This is ${this.namr} with ${this.color} of ${this.wheels} wheels.`);
}

function Car(color, brand, seats) {
    this.brand = brand;
    this.seats = seats;
}

Car.prototype.getDetails = function() {
    console.log(`This is ${this.brand} and ${this.seats} seater.`);
}

// Getters and Setters 

class Circle {
    constructor(radius){
        this.radius = radius;
    }
}
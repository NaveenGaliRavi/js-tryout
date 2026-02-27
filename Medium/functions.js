/*
Function Experssions
- const sum = function(a,b) {
    return a+b;
}
-hoiesting will not work until the variable is declared and initialized.

--------------------------------------------------------------
Arrow Function

var sum = (a,b) => {
    return a+b;
    }
or
var sum = (a, b) => a+b;
--------------------------------------------------------------
IIFE (Immediately Invoked Function Expression)
-This allows to create private variables with public methods to access. 
(function (a,b){ //anonymous function declaration
console.log(a+b);
})(4, 2); //immediate call of function

--------------------------------------------------------------
Call Back Functions 

function (aurgFunc) {
 console.log(`${aurgFun(), This is log file}`);
}

function aurgFunc () {
  return 'Hello';
}
--------------------------------------------------------------
Function returning Functins

function f1(argu1) {
  return function f2(argu2) {
    console.log(`${argu1} is the best place to ${argu2}`)
  }
}
--------------------------------------------------------------
Higher Order Function

-Function which accepts an function as argument
-Function which return an function

--------------------------------------------------------------
Currying in JS

function power(a,b){
return a ** b
}

function power(b) {
  return function (a) {
    return a ** b;
  }
}

power(2)(3);
or 
const square = power(2);
square(3); --9(result)

--------------------------------------------------------------
MAP and reduce in JS

find(), findIndex(), every(), fill(), findLast(), 
findLastIndex(), forEach(), some()

-----------------------------------------------------------------

THIS 
-it is an pointer pointing to its properties of parent. 

*/

//IIFE example 

const user = (function () {
    const userDate = {userName: 'Naveen',
                    userAge: 27,
    };

    function getName() {
        console.log(userDate.userName);
    }

    function updateAge(age) {
        console.log(userDate.userAge+age);
    }

    return {getName, updateAge};
})();

user.getName();
user.updateAge(3);

// console.log('IIFE');

//inc/dec function

function main() {
  const counter = (function () {
    //Define the private variable to store the count
      let count = 0;

    // Define the Increment function
      function increment() {
          count++;
          console.log(`Count after increment: ${count}`);
   }

    // Define the Decrement function
      function decrement() {
          count--;
          console.log(`Count after decrement: ${count}`);
    }

    // Return the increment and decrement functions as part of the counter object
      return { increment, decrement };
  })();

  counter.increment();
  counter.increment();
  counter.decrement();

  return counter;
}

main();

//call back function example
function callback (aurgFunc) {
 console.log(`${aurgFunc()}, This is log file`);
}

function sayHello() {
  return 'Hello';
}

callback(sayHello);


//function rturning function

function f1(argu1) {
  return function f2(argu2) {
    console.log(`${argu1} is the best place to ${argu2}`)
  }
}

const phase1 = f1('Hello');
// console.log(phase1('Bye'));

f1('Chennai')('grow');

console.log('----------------tryout---------------------------------');

// MAP function 
const numbers = [2, 4, 6, 8, 7];

function transformNumbers(numbers) {
  // Implement your function here
  // Use the map function to apply the transformations to each element
  // Square the number, and if it's even, double its value after squaring it

    const result = numbers.map((item) => {
      // console.log(item);
        if (item%2 == 0) {
          // console.log((item**2)*2);
            return ((item**2)*2);
        } else {
          // console.log(item**2);
            return (item**2);
      }
  });
  
  return result;
}

const arr = transformNumbers(numbers);
console.log(arr);


// REDUCE Function
const scores = [85, 90, 78, 88, 76, 95, 89];

function findHighestScore(scores) {
  // The goal is to find the highest score among the students.
    const maxScore = scores.reduce((acc, item) => {
      // console.log(acc);
        if (acc >= item) {
            return acc=acc;
        } else {
           return acc=item;
        }
    });

    return maxScore;
  // Implement your logic below and return the highest score.
}

console.log(findHighestScore(scores));


// List of names
const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

// Function 1: Find names
function findNames(names, peopleName) {
    const funname = names.find((name) => name == peopleName);
    return (funname==undefined?"Name not found":funname); 
}

// Function 2: Find index of a name
function updateNamesIndex(names, peopleName) {
    const funindex = names.findIndex((name) => name==peopleName );
    return funindex;
}

// Example Usage:
console.log(findNames(names, "John")); // Output: "John"
console.log(findNames(names, "Andrew")); // Output: "Name not found"

console.log(updateNamesIndex(names, "Emma")); // Output: 3
console.log(updateNamesIndex(names, "Mark")); // Output: -1


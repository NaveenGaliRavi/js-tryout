/*
Execution Context
-JS the way code interpret.
    -Creation Phase
        --declared variables will get created.
        --functions will get stored with function name.
    -Execution Phase
        --created variables will get assigned with declared values.
        --for each function, new Execution contect will get created.

hoisting
-Rule is to declare variables and functions on top of the file.
-hoisting means, declared variables will retuirn undefined value due to place of declaration.
--understanding of execution context can address this behaviour.

call stack
-multi layered function calls will be stored as call stack.
example: 
function a {
        function b{
            function c{
            }
        }
}

stack:
fun c <---
fun b
fun a


scope:
Global
Function(local)
Block (from ES6) 

scope chaining
-based on declaratins, variables can be used similar to call stack.

undefined, notdefined, Temporal Dead Zone(TDZ)

console.log(a);
let a= 10; --throws reference error.
var a=10; --returns undefined
a=10; --returns not defined error. 

let falls under TDZ if using before declaration.

Sctict mode:
-on top of file/function use 'use strict'
-it prevents assigning values to variables without declaration.


Closures:
-it remembers the lexical structure of the variable even it is popped out of the call stack.

*/

//closure example

let a='Global';

function outerPrint() {
    let b='OuterPrint';

    return function innerPrint() {
        let c='innerPrint';
        return `${a} -> ${b} -> ${c}`
    }
}

// const show=outerPrint();
// console.log(show);
// const printInner = show();
// console.log(printInner);

function generateID(num){
    let a=num;
//Implement Your function here
    return function generateID() {
        // a=Number(num);
        return a++;

    };
}

const func = generateID(100);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100
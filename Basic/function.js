/* Functions Syntax

function functionName(){

}

// default parameters
function functionName(param1, param2=0){

}

// return from function
function functionName(param1) {

return param1;
}


// function calls
functionName();
functionName(param1, param2);

let variableName=functionName(param1);
*/

function commonDigits(num1, num2) {

    let stringNum1 = num1.toString().length;
    let stringNum2 = num2.toString().length;

    console.log(stringNum1);
    console.log(stringNum2);

    if (stringNum1 == stringNum2) {
        return true;
    } else {
        return false;
    }

}

let val =commonDigits(2,33);

if(val){
    console.log('true');
} else {
    console.log('false');
}
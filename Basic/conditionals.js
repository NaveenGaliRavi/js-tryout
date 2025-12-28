//if, if-else, if-else-if statements
/*
if (condition) {
}

if () {

} else {

}

if () {

}else if () {

} else {

}

switch () {
    case a: 
    break;
    case b:
    break;
    default:
}

*/
// let num=prompt("Enter a number:");

let num=3;

if (num%2==0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}

//month to quater 

let month=7;

if (month >=1 && month <=3) {
    console.log("1st Quater");
} 
else if (month >=4 && month <=6) {
    console.log("2nd Quator");
}
else if (month >=7 && month <=9) {
    console.log("3rd Quator");
}
else if (month >=10 && month <=12) {
    console.log("4th Quator");
}
else {
    console.log("Invalid Month");
}

//email validation example 
//lenght > 11
//after . 2/3 chars
//min 3 chars b/w @ and .
let email='naveen@google.com';

if (email.length > 11 &&
   ((email.substring(email.lastIndexOf('.')+1)).length >=2 && (email.substring(email.lastIndexOf('.')+1).length) <=3) &&
   (email.substring(email.lastIndexOf('@')+1, email.lastIndexOf('.'))).length >=3) {
                console.log('Valid email');
} else {
    console.log('Invalid email');
}
console.log(email.lastIndexOf('@'));
console.log(email.lastIndexOf('.'));
console.log(email.substring(email.indexOf('.')+1))
console.log(email.substring(email.lastIndexOf('@')+1, email.lastIndexOf('.')));

console.log('-----------------------------------------');

let result;
  // Step 1: Find the index of "@" in the email
    const indexAt = email.lastIndexOf('@');

  // Step 2: Find the index of the last dot "." in the email
    const indexDot = email.lastIndexOf('.');

  // Step 3: Calculate the length of the email
    const lengthEmail = email.length;

  // Step 4: Validate the email
  // Check if there are at least 3 characters before the "@" symbol
  // Ensure there is a dot "." at least 4 characters after "@"
  // Make sure there are at least 2 characters after the last dot "."

  function main(email){
    let result;
    let atindex = email.indexOf("@");
    let dotindex = email.lastIndexOf(".");
    let len = email.length;
    if (atindex >= 3 && dotindex - atindex >= 4 && len - dotindex - 1 >= 2) {
            result = "Welcome " + email + " to our site";
    } else {
            result = "invalid email";
    }
    return result;
}

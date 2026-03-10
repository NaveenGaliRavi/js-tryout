let arr1;

arr1 = [1,2,3,4,5];

console.log(arr1);

let num = arr1.map(item => {
        console.log(item);
});

const num1 = arr1.reduce((acc, item) => {
    return acc+item;
});

console.log(num1);


let arr2 = [["rent", 100, 20],["rome", 30, 23]];

let name1="naveen";
let age=27;
let veh="car";

arr2.push([name1, age, veh]);

console.log(arr2);

// const secondElement = arr2.map(item =>  item);
let sum=0;

// for(let i=0; i< arr2.length; i++){
//     console.log(sum+=arr2[i][1]);
// }

// console.log(secondElement);
let inside;
const secondElement = arr2.map(item => item[2]);

console.log(secondElement);

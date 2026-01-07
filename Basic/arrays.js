/*
Arrays

const arrayName = ["","","",""];

arrayName.push(""); --add element to end of array(return length)
arrayName.unshift(""); --add element to start of the array (return length)

arrayName.pop(); --remove element from end (return popped element)
arrayNameshift(); --remove element from start (return shifted element)


arrayName.indexOf(""); --returns index of an element if present /-1 if not present.

arrayName.includes(""); --returns true/false if element present 

arrayName.slice(2); --returns array by removing elements before index 2
arrayName.splice(insertIndex, deleteCountFromInsertIndex, listOfElementsAdd); 
--insert items in between
--3 parameters, 
    insertIndex (new item to insert in an index)
    no. of elements to delete from the insertIndex
    List of items to be added 

arrayName1.concat(arrayName2, arrayName3); --conct multiple arrays  without chnging original one.

for(let i in arrayName) {
--i act as iterator , aslo i is string here
}


for(let element of arrayName) {
--array element acts as iterator
}

"REST(...)" method to pass multiple elemnts as functin argument 
function funName (name1, ...name2) {
    for(let i of name2) {
    console.log(i);
    }
}

"SPREAD(...)" helps to shallow copy array elements to another array
const arr1=["","",""];
const arr2 = [...arr1];

Also to Concat using SPREAD
mergedArr = [...arr1,...arr2];


String Methods 

str.includes("char/word") - returns true or false

str.trim() --trim trailing spaces 

str.replace(""); - replace first occurance

str.replaceAll(""); --replace all occurance

str.subString(); --return substring 
a --return by omitting "a" index number of chars from str.
a,b --return chars from "a" to "b" index range.

str.slice() --same as subString, but handles negative index inputs.

str.split(" ")  - creates array with str, using seperater as break point.


*/

//One

function findDuplicate(arr){
    const dup=[];
    for (let num of arr) {
        if ((arr.indexOf(num) != arr.lastIndexOf(num))) {
            if(!dup.includes(num))
                dup.push(num);
        }
    }
    return dup;
}  

/*
let arr = [4, 2, 34, 4, 1, 12, 1, 4];
console.log(findDuplicate(arr));
*/

//accept and print batch by adding to array (not optimized)
function batchArray(batch, name) {
   
    switch (batch){
        case "Jan":
            janBatch.push(name);
            console.log(janBatch);
            break;
        case "Feb":
            febBatch.push(name);
            console.log(febBatch);
            break;
        case "Mar":
            marBatch.push(name);
            console.log(marBatch);
            break;
        default:
            console.log("Enter valid batch");
    }
}

/*
 const janBatch=[], febBatch=[], marBatch=[];

batchArray("Jan", "Naveen");
batchArray("Jan", "Praveen");
batchArray("Jan", "Srujan");
batchArray("Jan", "Rakul");
batchArray("Mar", "Gagan");
batchArray("Mar", "Jagan");
*/

function batchArrayImp1(batch, name) {
    batch.push(name);
    console.log(batch);
}

/*
const janBatch=[];
const febBatch=[];

batchArrayImp1(janBatch, "Naveen");
batchArrayImp1(janBatch, "Sukumar");
batchArrayImp1(janBatch, "Rajamouli");
*/
//using REST
function batchArrayRest(batch, ...name){
    for(let i of name) {
        batch.push(i);
    }
    console.log(batch);
}

/*
const janBatch=[];
const febBatch=[];

batchArrayRest(janBatch, "Naeen","Mohanlal", "Mamuti","Avesham");
*/

/*
const arr1=["a","b","c","d"];
// const arr2=arr1; //points array to arr1
// const arr2=[arr1]; //creates nested array [[arr2-elements]]
const arr2=[...arr1]; //shallow copy of elements from arr1 SPREAD(...)

// console.log(arr2);
arr1.push("e");
// console.log(arr1);
console.log(arr2);
*/

function reverseString(str){
    //Implement Your function here
    let arr = str.split("");
    arr.reverse();
    str=arr.join("")
    return str;
    }

// console.log(reverseString("Hello"));


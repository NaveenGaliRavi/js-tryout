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


*/

//One
let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
//Implement your function here
    const dup=[];
    for (let num of arr) {
        if ((arr.indexOf(num) != arr.lastIndexOf(num))) {
            if(!dup.includes(num))
                dup.push(num);
        }
    }

    return dup;

}    
console.log(findDuplicate(arr));
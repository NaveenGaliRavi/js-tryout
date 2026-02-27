/*
Execution Context
  -Context window
    -creation
    -execution
Hoiesting
Call Stack


*/
/*
const students = {
    name: "Naveen",
    age: 10,
    hobby: "Learning",
    10: "Ten",
    show: function() {
        console.log("This is students function");
    }
}

students.class ="UG";

// console.log(students);
// console.log(students.name);
// console.log(students["hobby"])
// students.show();

const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};

// console.log(goods.apple.price)

function calculatePrice(goods) {
  // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;
    let total = 0;

  // Hint 2: Use a for-in loop to iterate over the properties (items) in the goods object
  // for (let item in goods) { ... }
    for (let i in goods) {
        // console.log(goods[i].price);
        total = total + (goods[i].price * goods[i].quantity);
  }

    return total;
}

// console.log(calculatePrice(goods));

*/
function factorial(n) {
    if(n===0){
        return 1;
    }

    return n* factorial(n-1);
}

console.log(factorial(5));
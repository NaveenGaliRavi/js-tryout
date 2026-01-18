// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];
//access manually
// console.log(orders[1].orderNumber);
// console.log(orders[1].items[0].name);
// console.log(orders[1].items[0].price);
// console.log(orders[1].items[1].name);
// console.log(orders[1].items[1].price);
// console.log(orders[1].discountCode);

let sum = 0;
//access through nested for loop
for (let i = 0; i < orders.length; i++) {
  for (let j = 0; j < orders[i].items.length; j++) {
    // console.log(orders[i].items[j].name);
    // console.log(orders[i].items[j].price);
    sum = sum + orders[i].items[j].price;
  }
}
// console.log(`Sum : ${sum}`);

//through higherorder function
/*
let val = orders.reduce((acc1, ele) => {
  // console.log(ele.orderNumber);
  // console.log(ele.items);
  let pri = ele.items.reduce((acc, ele) => {
    // console.log(ele.name);
    // console.log(ele.price);
    // console.log(ele.price);
    return acc + ele.price;
  }, 0);
  console.log(ele.discountCode);
  if (ele.discountCode == "COFFEELOVER") {
    pri = (pri - pri * 0.1).toFixed(2);
  }

  console.log(pri);
  return acc1 + Number(pri);
}, 0);

console.log(val);
*/
// Function to calculate the total value of all orders
// Apply discounts if applicable
/*  

*/
function totalOrderValue(orders, applyDiscount) {
  // Map over each order to calculate its total value
  // Use the reduce method to sum the prices of all items in the order
  // Check if a discountCode is present and apply the discount using the provided callback function

  // Your implementation should:
  // 1. Calculate the total value for each order
  // 2. Apply the discount (if any) using the applyDiscount callback
  // 3. Sum up the totals for all orders
  // 4. Return the final grand total rounded to 2 decimal places
  /*
  let head = orders.reduce((acc, ele) => {
    let pri = ele.items.reduce((acc, ele) => {
      return acc + ele.price;
    }, 0);
    let fin = applyDiscount(ele.discountCode, pri);
    return acc + fin;
  }, 0);
*/
let head = orders.map(( ele) => {
    let pri = ele.items.reduce((acc, ele) => {
      return acc + ele.price;
    }, 0);
    let fin = applyDiscount(ele.discountCode, pri);
    return fin;
  });
//   console.log(head);
let grand = head.reduce( (acc,ele) => acc+ele , 0);
  return Number(grand.toFixed(2));
}

//Below is the callback function to calculate the discount
const applyDiscount = (discountCode, total) => {
  // Implement discount logic here
  let disk=total;
  switch (discountCode){
    case 'COFFEELOVER':
        disk = total *0.9;
        break;
    case 'TEALOVER':
        disk = total *0.8;
        break;
    default:
        disk = total;
  }
  return Number(disk.toFixed(2));
};

console.log(totalOrderValue(orders, applyDiscount));

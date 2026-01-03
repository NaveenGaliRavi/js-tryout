//for loop

// for(let i=0; i<50; i+=2) {
//     // if(i%2===0){
//     console.log(i);
//     // }
// }

//prime or not in for 

// let num=7;

// let count=0;
// for(let i=2 ; i<=num; i++) {
//     if(num%i==0){
//         count=count+1;
//         console.log("inside");
//     }
// }
// if(count>1) {
//     console.log(num+" is Not Prime")
// } else {
//     console.log(num+" is Prime")
// }
// or 

// let isPrime=true;
// for(let i=2; i<num; i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }

// if(isPrime) {
//     console.log(num+" is Prime")
// } else {
//     console.log(num+" is Not Prime")
// }

//while loop

// let i=1;

// while(i < 20) {
//     console.log(i);
//     i++;
// }


//do-while loop
//exit control loop


// let randomNum=Math.round(Math.random()*100);
// console.log(randomNum);
// let num;

// do {
//     num=prompt("enter number");
//     console.log("Enter num "+ num);

//     if(randomNum==num){
//         console.log("Gussed Correctly");
//     } else {
//         console.log("Try once more!")
//     }
// } while (randomNum!=num);


//Nested Loop
//  table multiplication
// for(let num=2; num<=10; num++){
//     for(let i=1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     } 
// }

//  prime num till 100
for(let num=2; num<=100; num++) {
    for(let i=2; i <num; i++){
        if(num%i==0){
            isPrime=false;
            break;
        } else {
            console.log(num);
            break;
        }
    }
}
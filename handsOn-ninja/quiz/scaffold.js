//revisit this 
 const arr1 = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
  ];

  let currentIndex = arr1.length;

      while (currentIndex > 0) {

        const randomIndex = Math.floor(Math.random() * currentIndex );
 
        currentIndex--;

        console.log(randomIndex);
      }







function main() {
  const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
  ];


  function shuffle(arr) {
    return function () {
      const result = [...arr]; // Make a copy of the input array.

      let currentIndex = arr.length;

      while (currentIndex > 0) {

        const randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex--;

        // Swap the current element with the randomly-selected one.

        const temp = result[currentIndex];

        result[currentIndex] = result[randomIndex];

        result[randomIndex] = temp;

      }
      return result;
    };
  }
  return shuffle;
}

// console.log(main());
// const step1 = main();
// console.log(step1());
// const  step2 = step1();
// console.log(step2());

console.log(main()()());
// console.log(Math.random());

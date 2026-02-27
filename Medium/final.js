// Complete the function calculateAverage
const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 },
];
const pressureThreshold = 1015;

/*
function calculateAverage(pressureThreshold) {
  //Implement your function here

let filterPressure = weather.filter((ele) => {
  if(ele.pressure >= pressureThreshold) {
    return ele;
  }
  });

let extractTemp = filterPressure.map((ele) => ele.temperature);

let sumTemp = extractTemp.reduce((acc,ele)=>{ return acc+ele},0)

let result = (sumTemp/extractTemp.length).toFixed(1);

return result;
}
*/

function calculateAverage(pressureThreshold) {
  //Implement your function here

  let filterPressure = weather
    .filter((ele) => {
      if (ele.pressure >= pressureThreshold) {
        return ele;
      }
    })
    .map((ele) => ele.temperature);


  let sumTemp = filterPressure.reduce((acc, ele) => {
    return acc + ele;
  }, 0);

  let result = (sumTemp / filterPressure.length).toFixed(1);

  return result;
}

console.log(calculateAverage(pressureThreshold));
//Output : 68.3

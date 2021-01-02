
// A function that take an array and produce an array as result with given conditions

//Solution 3 using for of loop with 2 conditional statements

const chooseStations = (stations) => {
  let goodStations = [];
  for (const arr of stations) {
    const capacity = arr[1];
    if(capacity >= 20){
      const type = arr[2];
      if(type === 'school' || type === 'community centre'){
        goodStations.push(arr[0]);
      }
    }
  }
  console.log(goodStations);
}


// Solution 2 using for of loop with 1 conditional statement

// let goodStations = [];
// for (const arr of stations) {
//   const capacity = arr[1];
//   const name = arr[0];
//   if(capacity >= 20 && arr[2] === 'school' || arr[2] === 'community centre'){
//     goodStations.push(name);
//   }
  
// }
// console.log(goodStations);



// Solution 1 using for loop

// let goodStations = [];
// for (let i = 0; i < stations.length; i++) {
//   const element = stations[i];
//   for (let j = 0; j < element.length; j++) {
//     const element2 = element[j];
//     if (element[1] >= 20 && element[2] === 'school' || element[2] === 'community centre'){
//       goodStations.push(element[0]);
//       break;
//     }
//   }
// }
// console.log(goodStations);

// TEST CODE
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);


//result
// ['Bright Lights Elementary', 'Moose Mountain Community Centre']
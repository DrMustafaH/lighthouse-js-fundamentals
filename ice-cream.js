const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// code to add an element to original array without mutating
const newIceCreamFlavours = iceCreamFlavours.concat('root beer');

// Test code to check if orginal array got mutated
console.log(newIceCreamFlavours);
console.log(iceCreamFlavours);

// code to log 1st array element
console.log(newIceCreamFlavours[0]);

// code to log last array element
console.log(newIceCreamFlavours[newIceCreamFlavours.length - 1]);

// code to log the number of elements in array
console.log(newIceCreamFlavours.length);



const firstFlavour = iceCreamFlavours[0];
console.log(firstFlavour);
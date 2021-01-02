// A function that take 3 parameters starting n, ending n and the step n (numbers) and returns an array
const range = function (start, end, step) {
  // empty array to be repopulated by function
  let output = [];
  // a for loop to repopulate the array
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  // return the output array created
  return output;
};


// TEST CODE
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

// Expected result
// [ 0, 2, 4, 6, 8, 10 ]
// [ 10, 15, 20, 25, 30 ]
// [ -5, -2, 1 ]
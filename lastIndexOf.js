// A function that takes an array and value and output the last index of array where the value was and if not there or empty it outputs -1
const lastIndexOf = function (array, value) {
  // if conditional statement that checks if array is empty it returns -1
  if (array.length === 0) {
    return -1;
    // else conditional statement that works if array is not empty
  } else {
    // a for loop over the array
    for (let i = array.length - 1; i >= 0; i--) {
      const e = array[i];
      // if conditional statement to check if the value is equal to the element in array it will return the index of the element
      if (value === e) {
        return i;
        // else if conditional statement to check if the value is NOT equal to element in array it will return -1
      } else if (value !== e) {
        return -1;
      }
    }
  }
};


// TEST CODE
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
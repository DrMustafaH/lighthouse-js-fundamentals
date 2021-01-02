const concat = function (arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    output.push(element);
  }
  for (let j = 0; j < arr2.length; j++) {
    const element2 = arr2[j];
    output.push(element2);
  }
  return output;
}

// TEST CODE
console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
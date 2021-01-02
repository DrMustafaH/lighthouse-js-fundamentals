const merge = function (arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    output.push(element);
  }
  for (let j = 0; j < arr2.length; j++) {
    const element2 = arr2[j];
    output.push(element2);
  }
  return output.sort();
}


// Test Code
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
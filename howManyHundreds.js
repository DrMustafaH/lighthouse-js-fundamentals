const howManyHundreds = function (numbeOfBottles){
  if (numbeOfBottles % 100 === 0){
    return numbeOfBottles/100;
  } else {
    return Math.floor(numbeOfBottles/100);
  }
};

// TEST CODE
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

// Expected result
// 10, "=?", 10
// 8 '=?' 8
// 5 '=?' 5
// 0 '=?' 0
// 0 '=?' 0
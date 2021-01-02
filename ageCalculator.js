// function with 3 parameters (string and 2 numbers), it calculates age and retuns a string

const ageCalculator = function (name,DOB,currentYear){
  const age = currentYear - DOB;
  return `${name} is ${age} years old.`;
};

// TEST CODE
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// Expected result
// "Miranda is 32 years old"
// "Ferdinand is 27 years old"
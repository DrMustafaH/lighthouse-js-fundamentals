// learning loops with lighthouse labs parts 3

// using while loop to log 100 - 200 but replacing certain numbers with words using conditionals
let counter = 100;

while (counter <= 200) {
  if (counter % 4 === 0 && counter % 3 === 0) {
    console.log('LoopyLighthouse');
  } else if (counter % 4 === 0) {
    console.log('Lighthouse');
  } else if (counter % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(counter);
  }
  counter++;
};
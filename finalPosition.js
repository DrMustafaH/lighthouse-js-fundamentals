// a funtion that takes an arguments of directions (string) and results in an array of coordinates (number)
const finalPosition = function (moves){
  const coordinates = [0,0];
  for (const direction of moves) {
    // conditions that help to increase coordinates counter depending on direction provided
    if (direction === 'north'){
      coordinates[1]++;
    } else if (direction === 'west'){
      coordinates[0]--;
    } else if (direction === 'east'){
      coordinates[0]++;
    } else {
      coordinates[1]--;
    }
  }
  return coordinates;
};




// TEST CODE
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log (finalPosition(moves));

//  Expected result
// [-1, 4]
const judgeVegetable = function (vegetables, metric) {
  let highestN = 0;
  let bestFarmer = '';
  for (let i = 0; i < vegetables.length; i++) {
    const object = vegetables[i];
    if (highestN < object[metric]) {
      highestN = object[metric];
      bestFarmer = object.submitter
    }
  }
  console.log(bestFarmer);
};



// TEST CODE
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
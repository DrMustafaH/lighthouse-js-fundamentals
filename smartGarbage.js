const smartGarbage = function (trash, bins) {
  bins[trash]++;
  console.log(bins);
};


// Test code
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });


// Expected result
// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }
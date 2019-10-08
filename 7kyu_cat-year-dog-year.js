// Kata Task

// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

//    Results are truncated whole numbers of "human" years

// Cat Years

//    15 cat years for first year
//    +9 cat years for second year
//    +4 cat years for each year after that

// Dog Years

//    15 dog years for first year
//    +9 dog years for second year
//    +5 dog years for each year after that


var ownedCatAndDog = function(catYears, dogYears) {
  return [
    animalYear([15, 9, 4], catYears),
    animalYear([15, 9, 5], dogYears)
  ];
}

var animalYear = function(years, age) {
  let realYears;

  const firstYears = years[0] + years[1];
  const nextYears = years[2];

  if (age < years[0]){ realYears = 0 }
  if (age >= years[0] && age < firstYears ){ realYears =  1 }
  if (age == firstYears && age < firstYears + nextYears){ realYears = 2; }
  if (age > firstYears){ realYears = 2 + Math.floor((age - firstYears)/nextYears)}


  return realYears;
}


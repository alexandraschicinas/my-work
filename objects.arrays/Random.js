var firstNames = ["John", "Matthew", "Thomas", "Christian", "David"];
var lastNames = ["Smith", "Pitt", "Cruise", "Robinson"];

function generateName() {
  var randomFirstName = Math.floor(Math.random() * firstNames.length);
  var randomFn = firstNames[randomFirstName];

  var randomLastName = Math.floor(Math.random() * lastNames.length);
  var randomLn = lastNames[randomLastName];

  // it's awesome that you guarded against errors with this if, but if you want to have it correct you have to write
  // if(randomFn !== undefined && randomLn !== undefined) because if we get wrong indexes with the random then firstNames[wrongIndex] would have the value undefined
  if (randomFn != 0 && randomLn != 0) return randomFn + " " + randomLn;
}

console.log(generateName());

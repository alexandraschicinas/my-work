var firstNames = ["John", "Matthew", "Thomas", "Christian", "David"];
var lastNames = ["Smith", "Pitt", "Cruise", "Robinson"];

function generateName() {
    var randomFirstName = Math.floor(Math.random() * lastNames.length);
    var randomFn = firstNames[randomFirstName];

    var randomLastName =  Math.floor(Math.random() * lastNames.length);
    var randomLn = lastNames[randomLastName];


    if ( randomFn !== undefined && randomLn !== undefined)
    return (randomFn + " " + randomLn);
}  
 
console.log(generateName());
 
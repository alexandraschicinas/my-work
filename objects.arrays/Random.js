var firstNames = ['John', 'Matthew', 'Thomas', 'Christian', 'David'];
var lastNames = ['Smith', 'Pitt', 'Cruise', 'Robinson'];

function generateName () {

    var randomFirstName = Math.floor(Math.random() * firstNames.length);
    var randomFn = firstNames[randomFirstName];

    var randomLastName =  Math.floor(Math.random() * lastNames.length);
    var randomLn = lastNames[randomLastName];

    if ( randomFn != 0 && randomLn != 0)
    return (randomFn + " " + randomLn);
}  
 
console.log(generateName());
 
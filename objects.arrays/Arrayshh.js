var array = [-2, 10, 2, 4, -6, 3];

<<<<<<< HEAD
var sumN = array.reduce(function(a, b) { 

    return a + b;
    
})
=======
var sumN = array.reduce(function (a, b) {
  // we don't need to verify that a is higher than 0, a holds the result and is not an element of the array
  if (a > 0 && b > 0) {
    return a + b;
  }
}); // please put the starting number, in this case 0
>>>>>>> master
console.log(sumN);

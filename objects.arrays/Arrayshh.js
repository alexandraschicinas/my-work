var array = [-2, 10, 2, 4, -6, 3]; 

var sumN = array.reduce(function (a, b) { 

    if (a > 0 && b > 0) {
    return (a + b)
    }
});
console.log(sumN);

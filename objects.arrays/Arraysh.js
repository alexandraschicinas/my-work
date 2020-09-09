var array = [-2, 10, 2, 4, -6, 3]; 
var nArray = array.sort ( function (a , b){
        return (a - b);
    }
);
console.log(nArray);

nArray = nArray.splice(0,2);
console.log (array);

var sumN = array.reduce( function (a, b){
    return (a + b);
});
console.log(sumN); 
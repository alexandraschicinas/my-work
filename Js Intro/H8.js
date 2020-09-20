function sayHello() {
  var n = new Date().getHours();
  if (n < 12) {
    console.log("Good morning", n);
    // here we need to use && instead of || because we want to say: n is between 12 AND 18 not: n is between 12 OR 18.
    // if we didn't had the other conditions the use of || (or operator) would result in a wrong message.
  } else if (n > 12 || n < 18) {
    console.log("Good afternoon", n);
  } else if (Number(n) > 18) {
    console.log("Goog evening", n);
  }
}
sayHello();

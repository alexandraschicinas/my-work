var animal = {
  type: "Bishon",
  name: "Pancho",
  gut: ["bones", "meat", "pedigree"],

  eat: function (tastyFood) {
    // we can't add items to the array using the '+' operator
    // if you want to add a list of foods that the puppy can enjoy then you need to use the `concat` function of arrays
    // otherwise just add a single item to the puppy's belly using `push`
    this.gut = this.gut + tastyFood;
    console.log("Eat:", tastyFood);
  },
};
console.log(animal);
console.log("Before", animal.gut);
animal.eat(["cake", "chocolate"]);
console.log("My dogs stomach is full of:", animal.gut);

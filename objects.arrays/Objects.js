var animal = {
    type : "Bishon",
    name : "Pancho",
    gut : ["bones", "meat", "pedigree",],

    eat: function (tastyFood) {
        this.gut = this.gut + tastyFood;
        console.log ("Eat:", tastyFood);

    },
};
console.log(animal);
console.log("Before", animal.gut);
animal.eat(["cake","chocolate"]);
console.log ("My dogs stomach is full of:", animal.gut)

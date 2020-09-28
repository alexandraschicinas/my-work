class shoppingCard {
<<<<<<< HEAD
    constructor(){
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(product, price) {
        this.items.push(product);
        this.totalPrice = this.totalPrice + price;         
        }

    removeItem(product, price) {
        const indexOfItemtobeRemoved = this.items.findIndex ( item => item === product);
        this.items.splice(indexOfItemtobeRemoved, 1);
        this.totalPrice = this.totalPrice - price;
    }

    total() {
        console.log(shoppingCard.totalPrice, shoppingCard.items.length);
    }       
    }
=======
  constructor(items, totalPrice) {
    this.items = [];
    this.totalPrice = 0;
  }

  addItem(product, price) {
    this.items.push(product);
    this.totalPrice = this.totalPrice + price;
  }

  removeItem(product, price) {
    // shift only removes the first item from the list.
    // to remove any item from an array we can either use filter to exclude the item from the result.
    // Or we need to use findIndex to find the index of the item we want to delete and then with splice to actually remove it
    this.items.shift(product);
    this.totalPrice = this.totalPrice - price;
  }

  // in this method we need only to do a console.log of the length of the items array and the total price. We don't need to reassign them
  total(totalPrice, items) {
    this.items = items.length;
    this.totalPrice = this.totalPrice;
  }
}
>>>>>>> master

const card1 = new shoppingCard();
card1.addItem("dress", 160);
card1.addItem("earings", 245);
card1.addItem("watch", 890);
console.log(card1.items, card1.totalPrice);

card1.removeItem("dress", 160);
console.log(card1.items, card1.totalPrice);

// this line should appear in the total method and we need to call it here
console.log(card1.totalPrice, card1.items.length);

const card2 = new shoppingCard();
card2.addItem("broccoli", 25);
card2.addItem("onion", 8);
card2.addItem("tomato", 6);
card2.addItem("meat", 60);
console.log(card2.items, card2.totalPrice);

card2.removeItem("broccoli", 8);
console.log(card2.items, card2.totalPrice);

console.log(card2.totalPrice, card2.items.length);

const card3 = new shoppingCard();
card3.addItem("shower gel", 20);
card3.addItem("shampoo", 45);
card3.addItem("parfume", 780);
card3.addItem("body cream", 35);
console.log(card3.items, card3.totalPrice);

card3.removeItem("parfume", 780);
console.log(card3.items, card3.totalPrice);

console.log(card3.totalPrice, card3.items.length);

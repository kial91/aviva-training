let fruits = ["orange", "apple", "pear"];
let fruit = "kiwi";
let fruitMessage = fruits.indexOf(fruit) > -1 ? "Yes, we have that fruit in stock!" : "Sorry, we don't stock that fruit.";
console.log(fruitMessage);

let count = 8;
let itemsMessage = count === 0 ? "You don't have any items." :
    count === 1 ? "You have an item." :
    count === 2 ? "You have a couple of items." :
    count === 3 ? "You have a few items." :
    "You have lots of items!";
console.log(itemsMessage);
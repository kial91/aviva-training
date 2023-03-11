//TODO - Convert this if/else using the ternary operator
//Make sure you check both conditions
let fruitMessage = "";
let fruit = "kiwi";
let fruits = ["orange", "apple", "pear"];
if (fruits.indexOf(fruit) > -1) {
    fruitMessage += "Yes, we have that fruit in stock!";
} else {
    fruitMessage += "Sorry, we don't stock that fruit.";
}
console.log(fruitMessage);

//TODO - Convert this switch statement using the ternary operator
//Make sure you check all conditions
let itemsMessage = "";
let count = 8;
switch (count) {
    case 0: {
        itemsMessage += "You don't have any items.";
        break;
    }
    case 1: {
        itemsMessage += "You have an item.";
        break;
    }
    case 2: {
        itemsMessage += "You have a couple of items.";
        break;
    }
    case 3: {
        itemsMessage += "You have a few items.";
        break;
    }
    default: {
        itemsMessage += "You have lots of items!"
        break;
    }
}
console.log(itemsMessage);
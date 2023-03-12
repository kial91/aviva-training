let doubleNumbers = [2, 5, 100];
console.log(doubleNumbers.map(function (number) {
    return number * 2;
}))

let namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
console.log(namesOnly.map(function (person) {
    return person.name
}));

let valuesOver10 = [0, 100, 1, 2, 50, -1];
console.log(valuesOver10.filter(function (value) {
    return value > 10;
}));

let initialValue = 0;
let values = [9, 20, 56, 10, 1, 20];
console.log(values.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, initialValue));

let users = [
    {
        name: 'Brian',
        age: 20
    },
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Tony',
        age: 40
    }
];
console.log(users.find(function(user) {
    return user.name === 'John';
}))
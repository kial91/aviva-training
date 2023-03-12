let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
[...arr1, ...arr2];

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
let arrays = [[0, 1, 2], [3, 4, 5]];
combineArrays(...arrays);

function sum(...values) {
    let sum = 0;
    for (let value of values) {
        if (typeof value === "number") {
            sum += value;
        }
    }
    return sum;
}
console.log(sum(1, 'John', 2, 'Mary', 3));

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };
let mergedObj = { ...obj1, ...obj2 };

let person = {
    name: "John",
    age: 30,
    jobTitle: "Developer",
    address: {
        houseNumber: 1,
        streetName: "High Road"
    }
};
let { name, age, ...other } = person;
//TODO - Write the following functions as arrow functions.
function greet(name) {
    return `Hi, ${name}`;
}
console.log(greet('John'));

function timeOfDayGreet(name, timeOfDay) {
    return `Hi, ${name}! What a wonderful ${timeOfDay}`;
}
console.log(timeOfDayGreet('John', 'morning'));

function timeOfDayGreet2(name, isMorning) {
    let timeOfDay = isMorning ? "morning" : "evening";
    return `Hi, ${name}! What a wonderful ${timeOfDay}`;
}
console.log(timeOfDayGreet2('John', true));

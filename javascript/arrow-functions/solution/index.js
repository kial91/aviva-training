let greet = name => `Hi, ${name}`
console.log(greet('John'));

let timeOfDayGreet = (name, timeOfDay) => `Hi, ${name}! What a wonderful ${timeOfDay}`
console.log(timeOfDayGreet('John', 'morning'));

let timeOfDayGreet2 = (name, isMorning) => {
    let timeOfDay = isMorning ? "morning" : "evening";
    return `Hi, ${name}! What a wonderful ${timeOfDay}`;
}
console.log(timeOfDayGreet2('John', true));

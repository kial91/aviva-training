/* TODO - Create a list of cars which have the correct types for the following properties:
    - manufacturer
    - model
    - year
    - dimensions (object)
        - height
        - width
    - colour
*/
let cars = [];

cars.forEach((car) => {
  console.log(`${car.model} - (${car.year})`);
  console.log(`Manufacturer: ${car.manufacturer}`);
  console.log(`Colour: ${car.colour}`);
  console.log(`Size: ${car.dimensions.height * car.dimensions.width}`);
});

// TODO - Fix the code below so 'value' can be assigned to 'firstName'.
let value: unknown;
value = 'John';

let firstName: string = value;
console.log(firstName);

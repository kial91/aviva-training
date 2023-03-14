let carsSolution: {
  manufacturer: string;
  model: string;
  year: number;
  dimensions: {
    height: number;
    width: number;
  };
  colour: string;
}[] = [
  {
    manufacturer: 'Ford',
    model: 'Focus',
    year: 2020,
    colour: 'black',
    dimensions: {
      height: 1000,
      width: 1000,
    },
  },
];
carsSolution.forEach((car) => {
  console.log(`${car.model} - (${car.year})`);
  console.log(`Manufacturer: ${car.manufacturer}`);
  console.log(`Colour: ${car.colour}`);
  console.log(`Size: ${car.dimensions.height * car.dimensions.width}`);
});

let solutionValue: unknown;
solutionValue = 'John';

if (typeof solutionValue === 'string') {
  let firstName: string = solutionValue;
  console.log(firstName);
}
console.log(firstName);

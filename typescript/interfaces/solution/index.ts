interface IPizza {
  name: string;
  slices: number;
  toppings: string | Array<string>;
  price: number;
  cheeseCrust?: boolean;
}

let solutionPizza: IPizza[] = [
  {
    name: 'Pizza BBQ',
    slices: 6,
    toppings: ['Tomato sauce', 'BBQ sauce'],
    price: 15,
    cheeseCrust: true,
  },
  {
    name: 'Margarita',
    slices: 8,
    toppings: 'Tomato sauce and cheese',
    price: 10,
  },
  {
    name: 'Hawaiian',
    slices: 10,
    toppings: 'Ham and pineapple',
    price: 10,
    cheeseCrust: false,
  },
];

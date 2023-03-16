interface Footballer {
  name: string;
  age: number;
  footballClub: string;
  position: string;
  shirtNumber: number;
  salary: number;
}

/**
 *
 * @param {Footballer} footballer
 * @returns {Footballer['name']} the footballer's name
 */

function getName(footballer: Footballer): Footballer['name'] {
  return footballer.name;
}

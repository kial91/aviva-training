/**
 *
 * Create a new interface or type alias with the previous footballer properties and allow footballers to have a position of:
 *
 * - 'goalkeeper'
 * - 'defender'
 * - 'midfielder'
 * - 'striker'
 *
 * Then create a function which returns a string with the following information.
 *
 * "#{footballerName} plays as a #{position}"
 *
 * *Bonus*
 *
 * There is a slight problem with Norwich City F.C's new signing, Bonjo Sheltree.
 *
 * The football club are unable to add him into their database, because he can play in multiple positions.
 *
 * If they can play in two positions, then the function should output:
 *
 * "#{footballerName} plays as a #{positionOne} or #{positionTwo}"
 *
 * Examples of footballer objects:
 *
 * const playerOne: Footballer = {
 *   name: 'Joe Bloggs',
 *   age: 22,
 *   footballClub: 'Test United',
 *   position: ['defender', 'midfielder'],
 *   shirtNumber: 4,
 *   salary: 3000000
 * }
 *
 * const playerTwo: Footballer = {
 *   name: 'John Doe',
 *   age: 25,
 *   footballClub: 'Test United',
 *   position: 'goalkeeper',
 *   shirtNumber: 1,
 *   salary: 1500000
 * }
 */

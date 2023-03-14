type Position = 'goalkeeper' | 'defender' | 'midfielder' | 'striker';

interface MultiSkilledFootballer {
  name: string;
  age: number;
  footballClub: string;
  position: Position | [Position, Position];
  shirtNumber: number;
  salary: number;
}

function footballerNameAndPosition(footballer: MultiSkilledFootballer): string {
  const footballerInfo = `${footballer.name} plays as a`;

  if (typeof footballer.position === 'string') {
    return `${footballerInfo} ${footballer.position}`;
  }

  const [positionOne, positionTwo] = footballer.position;

  return `${footballerInfo} ${positionOne} or ${positionTwo}`;
}

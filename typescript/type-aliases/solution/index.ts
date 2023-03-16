type FirstName = string;
type PersonScore = number;

let firstName: FirstName = "Tom";
let personScore: PersonScore = 70;

type Log = (firstName: FirstName, score: PersonScore, optionalParameter?: string) => void;
const log: Log = (firstName, score, optionalParameter) => {
    return;
};
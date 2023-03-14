let solutionPeople: {
    name: string,
    age?: number,
    eyeColour?: string
}[] = [
    {
        name: 'John',
    },
    {
        name: 'John',
        age: 40
    },
    {
        name: 'John',
        age: 30,
        eyeColour: "blue"
    },
    {
        name: 'John',
        age: 20,
        eyeColour: "green"
    },
    {
        name: 'Mike',
        age: 50
    }
]

let solutionGetPerson = (name: string, age?: number, eyeColour?: string) => {
    return solutionPeople.find(person => person.name === name && person.eyeColour === eyeColour && person.age === age ? person : undefined);
};

console.log(solutionGetPerson("John"));
console.log(solutionGetPerson("John", 40));
console.log(solutionGetPerson("John", 20, "green"));
console.log(solutionGetPerson("John", 30, "blue"));
console.log(solutionGetPerson("Mike", 50));
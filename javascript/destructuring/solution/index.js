let names = ['John', 'Tom', 'Mike', 'Adam', 'Tony', 'Simon'];
[names[0], names[1], names[2], names[3], names[4], names[5]] = ['Sean', 'Stephen', 'Chris', 'John', 'Daniel', 'Jamie'];

let [person1, person2, person3, person4, person5, person6] = names;
[person1, person2, person3, person4, person5, person6] = [person4, person1, person3, person2, person5, person6];
console.log([person1, person2, person3, person4, person5, person6]);

let object = {
    name: 'John',
    years: 30,
    job: {
        title: 'Developer'
    }
};

let {
    name,
    years: age,
    job: {
        title: jobTitle
    },
    isAdmin = false
} = object;

console.log(name);
console.log(age);
console.log(jobTitle);
console.log(isAdmin);


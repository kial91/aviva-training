/* TODO - Using destructuring change the array to contain the following names 'Sean', 'Stephen', 'Chris', 'John', 'Daniel', and 'Jamie'. 
    Then order the names alphabetically.
*/
let names = ['John', 'Tom', 'Mike', 'Adam', 'Tony', 'Simon'];
console.log(names);

/* TODO - Using destructuring 
    - set a variable called 'name' for the name property
    - set a variable called 'age' for the years property
    - set a variable called 'jobTtitle' for the title property
    - set a variable called 'isAdmin' and set it to false if the property doesn't exist
*/
let object = {
    name: 'John',
    years: 30,
    job: {
        title: 'Developer'
    }
};

let name = object.name;
let age = object.years;
let jobTitle = object.job.title;
let isAdmin = object.isAdmin || false;
console.log(name);
console.log(age);
console.log(jobTitle);
console.log(isAdmin);
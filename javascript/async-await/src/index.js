//TODO - Convert the Promise below using async/await
let myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
        }, 1000);
    });
}

myFunction().then(message => console.log(message));

//TODO - Convert the Promise below using async/await
let myFunction2 = (shouldFail) => {
    return new Promise((resolve, reject) => {

        if (shouldFail) {
            reject("Error");
            return;
        }

        setTimeout(() => {
            resolve("Hello");
        }, 1000);
    });
}

myFunction2(true)
.then(message => console.log(message))
.catch(errorMessage => console.error(errorMessage));
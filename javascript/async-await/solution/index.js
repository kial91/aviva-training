let myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
        })
    });
}
let run = async () => {
    let message = await myFunction();
    console.log(message);
}

run();

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
let run2 = async (shouldFail) => {
    try {
        let message = await myFunction2(shouldFail);
        console.log(message)
    } catch (error) {
        console.error(error);
    }
}

run2(true);
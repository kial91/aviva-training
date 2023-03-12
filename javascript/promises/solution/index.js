let myFunction1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
};

let myFunction2 = (data) => {
    return new Promise((resolve, reject) => {

        if (typeof data !== "number") {
            reject("error");
            return;
        }

        if (data % 2 === 0) {
            setTimeout(() => {
                reject("even");
            }, 2000);
        } else {
            setTimeout(() => {
                resolve("odd");
            }, 1000);
        }
    });
}
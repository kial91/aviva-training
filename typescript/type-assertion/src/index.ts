//TODO - Using type assertion fix the following type errors.
function getName(obj: object) {
    if (typeof obj.name === 'string') {
        return obj.name;
    }
    return '(Unnamed)';
}

//TODO - Use type assertion and type guarding to fix the following error
let myElement = document.getElementsByClassName(".control")[0]
myElement.checked = true
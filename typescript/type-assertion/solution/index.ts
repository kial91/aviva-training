interface INamed {
    name: string;
}
function solutionGetName(obj: object) {
    if (typeof (obj as INamed).name === 'string') {
        return (obj as INamed).name
    }
    return '(Unnamed)';
}

let myRadioButton = document.getElementsByClassName(".control")[0] as HTMLInputElement
if (myRadioButton.type === "radio") {
    myRadioButton.checked = true
}
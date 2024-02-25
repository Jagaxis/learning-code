import calculatorKeys from "./calculatorsKeys.js";

//  
const display = document.getElementById("display");
const buttonKeysContainer = document.getElementById("button-keys-container");

function appendToDisplay(input) {
    display.value = display.value + input;
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    display.value = eval(display.value)
}

//  with this function we will add elements keys in the item array.
function initCalculatorKeys() {
    const frag = document.createDocumentFragment();
    const arrayButton = getCalulatorKeysButton();
    for (let i = 0; i < arrayButton.length; ++i) {
        frag.appendChild(arrayButton[i]);
    }
    buttonKeysContainer.appendChild(frag)
}

function getCalulatorKeysButton() {
    const arrayButton = calculatorKeys.map((el) => {
        const button = document.createElement("button")
        button.type = "button"
        button.className = el.class
        button.textContent = el.label
        button.setAttribute("key", el.key)
        button.id = "calculator-key"
        button.addEventListener("click", () => {
            if (el.key === "=") return calculate();
            if (el.key === "AC") return clearDisplay();

            return appendToDisplay(el.key)
        })
        return button
    })
    return arrayButton
}

// Here we call the main function
initCalculatorKeys();



// Is not necesary for now
// window.alert(`Hola mundo`);

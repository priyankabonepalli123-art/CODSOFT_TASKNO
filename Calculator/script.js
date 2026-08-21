let display = document.getElementById("display");


// Add numbers to display
function appendNumber(number) {

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += number;
}


// Add operators to display
function appendOperator(operator) {

    if (display.value === "Error") {
        display.value = "";
    }

    // Prevent multiple operators
    let lastCharacter = display.value.slice(-1);

    if (["+", "-", "*", "/", "%"].includes(lastCharacter)) {
        display.value = display.value.slice(0, -1);
    }

    display.value += operator;
}


// Clear calculator
function clearDisplay() {

    display.value = "";
}


// Delete last character
function deleteLast() {

    display.value = display.value.slice(0, -1);
}


// Perform calculation
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        // Prevent calculation if expression ends with an operator
        let lastCharacter = display.value.slice(-1);

        if (["+", "-", "*", "/", "%"].includes(lastCharacter)) {
            display.value = "Error";
            return;
        }

        let expression = display.value;

        // Calculate percentage
        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "."
    ) {
        appendNumber(key);
    }

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {
        appendOperator(key);
    }

    else if (key === "Enter" || key === "=") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }

});
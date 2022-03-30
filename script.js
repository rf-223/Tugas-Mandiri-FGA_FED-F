/* eslint-disable no-unused-vars */
let previousNumber = "";
let calculationOperator = "";
let currentNumber = "";

const calculator_field = document.querySelector(".calculator-field");

const fieldUpdate = (number) => {
    calculator_field.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0' || currentNumber === '00') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

}

const number = document.querySelectorAll(".number");

number.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        fieldUpdate(currentNumber);
        playSound();
    })
})

const operator = document.querySelectorAll(".operator");

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        playSound();
    })
})

const inputOperator = (operator) => {

    if (calculationOperator === "") {
        previousNumber = currentNumber;
    }

    calculationOperator = operator;
    currentNumber = "";
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", (event) => {
    calculate();
    fieldUpdate(currentNumber);
    playSound();
})

const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case "*":
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        case "+":
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        default:
            break;
    }

    currentNumber = result;
    calculationOperator = "";
}

const btnClear = document.querySelector(".clear-all");

btnClear.addEventListener("click", (event) => {
    clearAll();
    fieldUpdate(currentNumber);
    playSound();
})

const clearAll = () => {
    previousNumber = "";
    calculationOperator = "";
    currentNumber = "";
}

const btnBackspace = document.querySelector(".backspace");

btnBackspace.addEventListener("click", (event) => {
    backspace();
    fieldUpdate(currentNumber);
    playSound();
})

const backspace = () => {
    let back = currentNumber.substring(0, currentNumber.length - 1);
    currentNumber = back;

}

const btnDecimal = document.querySelector(".decimal");

btnDecimal.addEventListener("click", (event) => {
    currentNumber += ".";
    fieldUpdate(currentNumber);
    playSound();
})

const btnPercent = document.querySelector(".percentage");

btnPercent.addEventListener("click", (event) => {
    let persen = currentNumber / 100;
    fieldUpdate(persen);
    playSound();
})

let playSound = () => new Audio("sound/mafon2__water-click.wav").play();
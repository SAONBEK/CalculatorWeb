let selectAction = "";
let numberOne = 0;
let input = document.getElementById("screen");
let selectActionOrginal = "";


function addNumber(number) {
    if (!input.value.includes('.') || number !== '.') {
        if (input.value === '0' && number !== '.' || selectAction.length > 0) {
            input.value = number;
            selectAction = "";
        } else {
            input.value += number;
        }
    }
}

function action(amal) {
    selectAction = amal;
    numberOne = input.value;
    selectActionOrginal = amal;
}

function Calculator() {
    if (selectActionOrginal === 'add') {
        natija = parseFloat(numberOne) + parseFloat(input.value);
    } else if (selectActionOrginal === 'subtract') {
        natija = numberOne - input.value;

    } else if (selectActionOrginal === 'multiply') {
        natija = numberOne * input.value;

    } else if (selectActionOrginal === 'divide') {
        natija = numberOne / input.value;
    }
    input.value = natija;
}

function Tozalash() {
    selectAction = "";
    numberOne = "0";
    input.value = "0";
    selectActionOrginal = "";
}

function reverse() {
    input.value = input.value*(-1);
}

function square() {
    input.value = input.value*input.value;
}

function root() {
    input.value = Math.sqrt(input.value);
}

function backspace() {
    input.value = input.value.slice(0,-1)
    if(input.value.length === 0)
    input.value = 0;
}
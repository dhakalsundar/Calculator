
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');

let currentValue = '';
let operator = '';
let previousValue = '';

function updateDisplay(value) {
    display.value = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (!isNaN(buttonValue) || buttonValue === '.') {
            currentValue += buttonValue;
            updateDisplay(currentValue);
        } else if (buttonValue === 'C') {
            currentValue = '';
            previousValue = '';
            operator = '';
            updateDisplay('');
        } else if (buttonValue === '=') {
            if (previousValue && currentValue && operator) {
                const result = calculate(Number(previousValue), Number(currentValue), operator);
                updateDisplay(result);
                previousValue = result;
                currentValue = '';
                operator = '';
            }
        } else {
            if (currentValue) {
                operator = buttonValue;
                previousValue = currentValue;
                currentValue = '';
            }
        }
    });
});

function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return 0;
    }
}

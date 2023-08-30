let screenText = document.getElementById('screen');
let previousNumber = 0;
let lastSymbol;
let buttons = document.getElementsByClassName('calc-button');

screenText.innerHTML = "0";

function handleButtonClick(e) {
    const buttonClicked = e.target.innerText;

    if(isNaN(buttonClicked)) {
        handleSymbolClick(buttonClicked);
    } else {
        handleNumberClick(buttonClicked);
    }
};

function handleSymbolClick(symbol) {

    switch (symbol) {
        case '←':
            lastSymbol = symbol;
            if(screenText.innerHTML.length == 1) {
                updateScreen("0");
            } else {
                updateScreen(screenText.innerHTML.substring(0, screenText.innerHTML.length -1));
            }
            break;
        case '=':
            if(!lastSymbol || !previousNumber) {
                return;
            }

            calculateAndUpdate();
            break;

        default:
            lastSymbol = symbol;
            previousNumber = parseInt(screenText.innerHTML);
            updateScreen(0);
            break;
    }
};

function calculateAndUpdate() {

    let newNumber = 0;
    let currentScreenNumber = parseInt(screenText.innerHTML);

    switch (lastSymbol) {
        case '×':
            newNumber = previousNumber * currentScreenNumber;
            break;
        case '÷':
            newNumber = previousNumber / currentScreenNumber;
            break;
        case '+':
            newNumber = previousNumber + currentScreenNumber;
            break;
        case '−':
            newNumber = previousNumber - currentScreenNumber;
            
            break;
    
        default:
            break;
    };

    updateScreen(newNumber.toString());
}

function handleNumberClick(number) {
    if(screenText.innerHTML == 0) {
        updateScreen(number);
    } else {
        updateScreen(screenText.innerHTML += number);
    }
}

function updateScreen(newText) {
    screenText.innerHTML = newText;
}

for (const element of buttons) {
    element.addEventListener('click', handleButtonClick);
}
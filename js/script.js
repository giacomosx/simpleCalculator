let temporaryValueCont = [];
let mainValue = 0;
let lastValueInsert = 0;
let lastSymbolInsert = '';

const themeBtn = document.getElementById('themeBtn');
const display = document.querySelector('.display');

window.onload = function (){
    takeValues();
    mainScript();
    
    document.getElementById('resetBtn').addEventListener('click', function(){
        resetValues();
        display.innerHTML = '';
    })

    document.getElementById('equalityBtn').onclick = getResult;

    themeBtn.onclick = changeTheme;
}


function sum(num1, num2) {
    return num1 + num2;
}
function substract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    let result = num1 / num2;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return result.toFixed(2);
    }
    
}

function trackValue(value) {
    mainValue = value;
    value = 0;
    temporaryValueCont = [];
}

function resetValues() {
    temporaryValueCont = [];
    mainValue = 0;
    lastValueInsert = 0;
}


function takeValues() {
    const numbersBtns = document.querySelectorAll('.numberBtn');

    numbersBtns.forEach(numberBtn => {
        numberBtn.addEventListener('click', function(){
            temporaryValueCont.push(numberBtn.innerHTML);
            lastValueInsert = Number(temporaryValueCont.join().replaceAll(',',''))

            display.innerHTML = lastValueInsert;

        })
    })
}


function calculate(num1, num2, operator) {
    let calculateResult = 0;
    switch (operator) {
        case '+':
            calculateResult = sum(num1, num2);
            break;
        case '-':
            calculateResult = substract(num1, num2);
            break;
        case '*':
            calculateResult = multiply(num1, num2);
            break;
        case '/':
            calculateResult = divide(num1, num2);
            break;
        default:
            break;
        }

    return calculateResult;
}


function getResult() {
    document.querySelectorAll('.operationBtn').forEach(btn => {
        btn.classList.remove('active');
    })


    let total = calculate(mainValue, lastValueInsert, lastSymbolInsert);

    display.innerHTML = total;
    resetValues();
}


function mainScript() {
    const functionsBtns = document.querySelectorAll('.operationBtn');

    functionsBtns.forEach(functionBtn => {
        functionBtn.addEventListener('click', function() {
            functionsBtns.forEach(button => {
                button.classList.remove('active');
            })

            functionBtn.classList.add('active');

            lastSymbolInsert = functionBtn.innerHTML;

            if (mainValue === 0) {
                trackValue(lastValueInsert);
            } else {
                let partialResult;
                
                partialResult = calculate(mainValue, lastValueInsert, lastSymbolInsert);

                display.innerHTML = partialResult;

                trackValue(partialResult);
            }      
                console.log(lastSymbolInsert);
                console.log(mainValue);
        })
                    
    })
}

function changeTheme() {
    const container = document.querySelector('.container');
    const toggleBtn = themeBtn.querySelector('span');
    const calculator = document.querySelector('.calculator');
    const numberBtn = document.querySelectorAll('.numberBtn');

    toggleBtn.classList.toggle('darkMode');
     
    if(toggleBtn.classList.contains('darkMode')) {
        toggleBtn.innerHTML = '<ion-icon name="moon-sharp"></ion-icon>';

        container.classList.add('container--dark');
        calculator.classList.add('theme--dark');
        display.classList.add('display--dark');
        
    } else {
        toggleBtn.innerHTML = '<ion-icon name="sunny-sharp"></ion-icon>';  

        container.classList.remove('container--dark');
        calculator.classList.remove('theme--dark');
        display.classList.remove('display--dark');
    }

}
let isDisplayed;
const display = document.querySelector('.display');

window.onload = function (){
    takeValues();
    
    document.getElementById('equalityBtn').onclick = getResult;
    
    document.getElementById('resetBtn').addEventListener('click', function(){
        display.innerHTML = '';
        removeActiveClass();
    })
    
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.onclick = changeTheme;
}


function takeValues() {
    const operatorList = ['+','-','*','/']
    const numbersBtns = document.querySelectorAll('.usefulBtn');

    numbersBtns.forEach(numberBtn => {
        numberBtn.addEventListener('click', function(){
            if (isDisplayed) {
                display.innerHTML = '';
                isDisplayed = false;
            }

            if (operatorList.includes(numberBtn.innerHTML)) {
                removeActiveClass() 

                numberBtn.classList.add('active');
            }

            display.innerHTML += numberBtn.innerHTML;
            console.log(numberBtn.innerHTML);
        })
    })
}

function getResult() {
    display.innerHTML = eval(display.innerHTML);
    removeActiveClass()
    isDisplayed = true;
}


function removeActiveClass() {
    const functionsBtns = document.querySelectorAll('.operationBtn');

    functionsBtns.forEach(button => {
        button.classList.remove('active');
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
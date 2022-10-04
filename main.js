const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathSign');
const clearButton = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const operateSign = document.querySelectorAll('.operator');
const operateNumber = document.querySelectorAll('.number');

let result = '';


clearButton.addEventListener('click', clearScreen);
equals.addEventListener('click', showResult);
operateSign.forEach((button) => button.addEventListener('click', operateSigns));
operateNumber.forEach((button) => button.addEventListener('click', operateNumbers));


function operateNumbers () {
 if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;

 if (this.textContent === '.' && currentNumber.innerHTML === '') {
return currentNumber.innerHTML = '0.'
 }

 if (this.textContent === '.' && currentNumber.innerHTML === '-') return currentNumber.innerHTML = '-0.';

 if (currentNumber.innerHTML.length > 16) {
   return;
 }

 currentNumber.innerHTML += this.textContent;
}


function operateSigns () {
    if (currentNumber.innerHTML === '' && this.textContent === '-' ) {
         currentNumber.innerHTML = '-';
        return;

    } else if(currentNumber.innerHTML === '' || currentNumber.innerHTML === '-') return;

    if (this.textContent === '-' && currentNumber.innerHTML === '-') return;

    if (mathSign !== '') {
        showResult();
    }
   previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';

}


function showResult () {
if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;
if (mathSign.innerHTML === '+') {
    result = Number(previousNumber.innerHTML) + Number(currentNumber.innerHTML);
}

if (mathSign.innerHTML === '-') {
    result = Number(previousNumber.innerHTML) - Number(currentNumber.innerHTML);
}

if (mathSign.innerHTML === 'x') {
    result = Number(previousNumber.innerHTML) * Number(currentNumber.innerHTML);
}

if (mathSign.innerHTML === ':') {
    result = Number(previousNumber.innerHTML) / Number(currentNumber.innerHTML);
}

if (mathSign.innerHTML === '**') {
    result = Math.pow(Number(previousNumber.innerHTML), Number(currentNumber.innerHTML));
}

currentNumber.innerHTML = result;
previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}


function clearScreen () {
currentNumber.innerHTML = '';
previousNumber.innerHTML = '';
mathSign.innerHTML = '';

}



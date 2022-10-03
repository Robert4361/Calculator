const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const deletes = document.querySelector('#delete');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

for(let i = 0; i < digits.length - 1; i++) {
  digits[i].addEventListener("click", function(){
    addNumber(digits[i]);
  });
}
for(let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(){
    addOperator(operators[i]);
  });
}
deletes.addEventListener('click', deleteOne);
clear.addEventListener('click', ()=> display.textContent='')

function addNumber(digit) {
  display.textContent += digit.textContent;
}
function addOperator(operator) {
  display.textContent += ` ${operator.textContent} `;
}

function deleteOne() {
  if(display.textContent.slice(-1) == ' ') display.textContent = display.textContent.slice(0, -3);
  else display.textContent = display.textContent.slice(0, -1);
}

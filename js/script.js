const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const deletes = document.querySelector('#delete');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('.equals');

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
  return Math.round(a / b * 100) / 100;
}

function operate(a, operator, b) {
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
      if(b == 0) return "math error";
      return divide(a, b);
      break;
  }
}

for(let i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", function(){
    addNumber(digits[i].textContent);
  });
}
for(let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(){
    addOperator(operators[i].textContent);
  });
}
deletes.addEventListener('click', deleteOne);
clear.addEventListener('click', ()=> display.textContent='')
equal.addEventListener("click", calculate);

function addNumber(digit) {
  if(display.textContent == "math error") display.textContent = '';
  display.textContent += digit;

}
function addOperator(operator) {
  if(display.textContent.slice(-1) == ' ' || display.textContent == "math error") return;

  const regex = /[\+\-\*\/]/;
  if(regex.test(display.textContent)) calculate();

  display.textContent += ` ${operator} `;
}

function deleteOne() {
  if(display.textContent.slice(-1) == ' ') display.textContent = display.textContent.slice(0, -3);
  else if (display.textContent == "math error") display.textContent = '';
  else display.textContent = display.textContent.slice(0, -1);
}

function calculate(){
  const parts = display.textContent.trim().split(" ");
  if(parts.length < 3) return;

  display.textContent = operate(Number(parts[0]), parts[1], Number(parts[2]));
}

window.addEventListener("keydown", function(event) {
  switch (event.key){
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0": 
      addNumber(event.key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      addOperator(event.key);
      break;
    case "=":
      calculate();
      break;
  }
});

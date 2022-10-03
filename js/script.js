const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');

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

function addNumber(digit) {
  display.textContent += digit.textContent;
}

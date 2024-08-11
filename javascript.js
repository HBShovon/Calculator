let numbers = document.querySelectorAll(".number");
// let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let input = document.querySelector("input");
let firstNum = "";
let secondNum;
let operator;

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

function operate(num1, operation, num2) {
  if (operation === "+") {
    return add(num1, num2);
  } else if (operation === "-") {
    return subtract(num1, num2);
  } else if (operation === "x") {
    return multiply(num1, num2);
  } else if (operation === "÷") {
    return divide(num1, num2);
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    // console.log(e.target.textContent);
    handleInput(e.target.textContent);

    firstNum += number.innerHTML;
    return firstNum;
  });
});
console.log(firstNum);

operators.forEach((op) => {
  op.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    handleInput(e.target.textContent);
  });
});

equal.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  handleInput(e.target.textContent);
});

clear.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  handleInput(e.target.textContent);
});

let inputValue = "";

function handleInput(num) {
  input.value += num;
}
console.log(inputValue);

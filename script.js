/*

let input = document.querySelector(".input");
let numbers = document.querySelectorAll(".number");
let decimal = document.querySelector(".decimal");
let op = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let currentScreen = document.querySelector(".current");
let previousScreen = document.querySelector(".previous");

let operation = "";
let currentValue = "";
let previousValue = "";
let result;

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNum(e.target.textContent);
    currentScreen.textContent = currentValue;
    console.log(currentValue);
  })
);

op.forEach((op) => {
  op.addEventListener("click", function (e) {
    handleOp(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operation;
    currentScreen.textContent = currentValue;
  });
});

clear.addEventListener("click", function () {
  previousValue = "";
  currentValue = "";
  operation = "";
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

equal.addEventListener("click", function (e) {
  calculate();
  previousScreen.textContent = "";
  currentScreen.textContent = result;
});

function handleNum(num) {
  // console.log(num);
  if (currentValue.length <= 9) currentValue += num;
}

function handleOp(op) {
  console.log(op);
  operation = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  operation = operation.toString();
  result = operate(previousValue, operation, currentValue);
  previousValue = previousValue.toString();
  currentValue = currentValue.toString();
}

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

let num1;
let operator;
let num2;

function operate(num1, operator, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "x") {
    return multiply(num1, num2);
  } else if (operator == "÷") {
    return divide(num1, num2);
  }
}

console.log(operate(previousValue, operation, currentValue));
*/

let input = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

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

console.log(operate(100, "+", 20));

let previousValue;
let operation;
let currentValue;

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

function handleNumber(num) {
  currentValue += num;
  previousValue = currentValue;
  // currentScreen.textContent = "";
  // currentValue = "";
}
// console.log(previousValue);

operators.forEach((op) =>
  op.addEventListener("click", function (e) {
    handleOp(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operation;
    currentScreen.textContent = currentValue;
  })
);
console.log(previousScreen.textContent);

function handleOp(op) {
  // console.log(op);
  operation = op;
  previousValue = currentValue;
  currentValue = "";
}

decimal.addEventListener("click", function (e) {
  handleDecimal(e.target.textContent);
});

function handleDecimal(dec) {
  console.log(dec);
}

equal.addEventListener("click", function (e) {
  // handleEqual(e.target.textContent);

  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  // console.log(operate(previousValue, operation, currentValue));
  console.log(previousValue);
  console.log(currentValue);

  console.log(divide(previousValue, currentValue));
});

clear.addEventListener("click", function (e) {
  previousValue = "";
  currentValue = "";
  operation = "";
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

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

console.log(previousValue);
console.log(currentValue);

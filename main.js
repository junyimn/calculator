// link html classes to js variables
const displayPrevious = document.querySelector(".display-1");
const displayCurrent = document.querySelector(".display-2");
const tempResultDisplay = document.querySelector(".temp-result");
const numbersButton = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearAllButton = document.querySelector(".all-clear");
const clearLastButton = document.querySelector(".last-entity-clear");

// initalisng the variables throughout the calculator
// previousNum + currentNum = stores the number into a string
let previousNum = "";
let currentNum = "";
// set result to null = undeclare the result
let result = "";
let lastOperation = "";
let hasDecimal = false;

// function which sets the number pressed by user and prevents multiple decimals being displayed
numbersButton.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (event.target.innerText === "." && !hasDecimal) {
      // checks current input is a decimal && decimal does not exsist on display
      // prevents multiple decimals being added to the calculator
      hasDecimal = true;
    } else if (event.target.innerText === "." && hasDecimal) {
      // exit out the function if a decimal already exsists
      return;
    }
    currentNum += event.target.innerText; // assign the user input to currentNum
    displayCurrent.innerText = currentNum; // updates the display
  });
});

// add event listener to the operation buttons
operationButtons.forEach((operation) => {
  operation.addEventListener("click", (event) => {
    if (currentNum === "") return;
    hasDecimal = false;
    const operationName = event.target.innerText; // storing the operation value
    // checks for valid equation
    if (previousNum && currentNum && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(currentNum);
    }
    clearDisplayedEquation(operationName); // clears main display
    lastOperation = operationName; // keeps track of last operation
  });
});

// function to clears main display and move current displayed result to temp and current displayed values
const clearDisplayedEquation = (operationName = "") => {
  previousNum += currentNum + " " + operationName + " ";
  displayPrevious.innerText = previousNum;
  displayCurrent.innerText = "";
  currentNum = "";
  tempResultDisplay.innerText = result;
};

// functions to calculate the equations
const mathOperation = () => {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(currentNum);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(currentNum);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(currentNum);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(currentNum);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(currentNum);
  }
};

// equal button whhich show thes the result whilst clearing the temp display
equalButton.addEventListener("click", () => {
  if (currentNum === "" || previousNum === "") return;
  hasDecimal = false;
  mathOperation();
  clearDisplayedEquation();
  displayCurrent.innerText = result;
  tempResultDisplay.innerText = "";
  currentNum = result;
  previousNum = "";
});

// function which acts as an all clear button to clear eveything
clearAllButton.addEventListener("click", () => {
  previousNum = "";
  currentNum = "";
  displayPrevious.innerText = "";
  displayCurrent.innerText = "";
  result = "";
  tempResultDisplay.innerText = "";
  hasDecimal = false;
});

// function which clears  the last entry into the calculator
clearLastButton.addEventListener("click", () => {
  displayCurrent.innerText = "";
  currel = false;
});
ntNum = "";
hasDecima;

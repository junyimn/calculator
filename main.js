// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//   }

//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }

//   delete() {}

//   appendNumber(number) {
//     this.currentOperandTextElement = number;
//   }

//   chooseOperation(operation) {}

//   compute() {}

//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.currentOperandTextElement;
//   }
// }

// const numberButton = document.querySelectorAll("[data-number]");
// const operationButton = document.querySelectorAll("[data-operations]");
// const equalsButton = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("[data-delete]");
// const allClearButton = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector("[data-previous]");
// const currentOperandTextElement = document.querySelector("[data-current]");

// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );

// numberButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

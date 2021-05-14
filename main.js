const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operations]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous]");
const currentOperandTextElement = document.querySelector("[data-current]");

clear() {
  currentOperandTextElement = ""
  previousOperandTextElement = ""
}

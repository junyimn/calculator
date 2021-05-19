"use strict";

var display1El = document.querySelector(".display-1");
var display2El = document.querySelector(".display-2");
var tempResultEl = document.querySelector(".temp-result");
var numbersEl = document.querySelectorAll(".number");
var operationEl = document.querySelectorAll(".operation");
var equalEl = document.querySelector(".equal");
var clearAllEl = document.querySelector(".all-clear");
var clearLastEl = document.querySelector(".last-entity-clear"); // initalisng the variables throughout the calculator
// dis1Num + dis2Num = stores the number into a string

var dis1Num = "";
var dis2Num = ""; // set result to null = undeclare the result

var result = null;
var lastOperation = "";
var haveDot = false; // prevent decimal point from being pressed more than once
// if the number has .

numbersEl.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (event.target.innerText === "." && !haveDot) {
      // if clicked on . and haveDot is false = execute this
      haveDot = true;
    } else if (event.target.innerText === "." && haveDot) {
      // exit out the function
      return;
    }

    dis2Num += event.target.innerText; // excute this code if no .

    display2El.innerText = dis2Num; // updates the display
  });
}); // add event listener to the op buttons

operationEl.forEach(function (operation) {
  operation.addEventListener("click", function (event) {
    if (!dis2Num) return;
    haveDot = false;
    var operationName = event.target.innerText;

    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }

    clearVar(operationName); // clears display

    lastOperation = operationName; // keeps track of last op

    console.log(result);
  });
}); // function to clears display + values

var clearVar = function clearVar() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}; // functions to calculate the equations


var mathOperation = function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}; // equal button whhich show thes the result whilst clearing the temp display


equalEl.addEventListener("click", function () {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  dis1Num = "";
}); // function which acts as an all clear button to clear eveything

clearAllEl.addEventListener("click", function () {
  dis1Num = "";
  dis2Num = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
  tempResultEl.innerText = "";
}); // function which clears  the last entry into the calculator

clearLastEl.addEventListener("click", function () {
  display2El.innerText = "";
  dis2Num = "";
});
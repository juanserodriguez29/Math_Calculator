const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//descripción del cáculo para no repetir todo en cada operación
function createAndWriteFunction(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //Vendor.js
}

//Mostrar en consola la operación realizada
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); //envía el objeto a la matriz cada vez que se ejecuta una operación
  console.log(logEntries); //muestra la matriz en la consola cada vez que se ejecuta una operación
}

function calculateResult(calculationType) {
  const enteredNumber = parseInt(userInput.value); //Valor ingresado lo pasa a entero
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" || 
    enteredNumber === 0
  ) {
    return;
  }

  
  const initialResult = currentResult; //el valor actual se agrega a una variable antes de que cambie
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult = currentResult - enteredNumber; //valor actual + valor ingresado
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult = currentResult * enteredNumber; //valor actual + valor ingresado
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult = currentResult / enteredNumber; //valor actual + valor ingresado
    mathOperator = "/";
  }

  createAndWriteFunction(mathOperator, initialResult, enteredNumber); //llamado a la función de descripción con los parámetros
  writeToLog(calculationType, initialResult, enteredNumber, currentResult); //llamado a la función que muestra en consola la operación que realicé
}

function add() {
  calculateResult("ADD");
}

function substract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

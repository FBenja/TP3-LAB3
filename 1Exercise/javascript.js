const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const operation = document.getElementById("operation");
const calculate = document.getElementById("calculate");
const form = document.getElementById("form");

const zeroValidation = () => {

  const numberTwoValue = Number(numberTwo.value);
  const operationValue = operation.value;


  if (operationValue === "divide" && numberTwoValue === 0) {
    calculate.disabled = true;
    return;
  } else {
    calculate.disabled = false;
  }
};

const calcular = () => {
  const numberOneValue = Number(numberOne.value);
  const numberTwoValue = Number(numberTwo.value);
  const operationValue = operation.value;

  let result;
  switch (operationValue) {
    case "addition":
      result = numberOneValue + numberTwoValue;
      break;
    case "subtraction":
      result = numberOneValue - numberTwoValue;
      break;
    case "multiplication":
      result = numberOneValue * numberTwoValue;
      break;
    case "divide":
      result = numberOneValue / numberTwoValue;
      break;
    default:
      result = "Not a valid operation";
  }

  alert(result);
};


operation.addEventListener("change", zeroValidation);

numberTwo.addEventListener("input", () => {
  let value = numberTwo.value;
  if (operation.value === "divide" && value === "0") {
    alert("Division by 0 is not possible");
  }
  zeroValidation();
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  calcular();
});
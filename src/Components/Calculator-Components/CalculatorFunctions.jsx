function changeCalc({ btnName, setCalculate }) {
  //Takes the buttons name that was passed in and compares it to 3 options.
  //Based on the btnName it configures Calculate object so the right visuals
  //are shown and the user inputs the right values into the right inputs.
  if (btnName === "Price") {
    setCalculate({
      toFind: btnName,
      firstInput: "Supply",
      secondInput: "Marketcap",

      findingPrice: true,
      findingSupply: false,
      findingMarketcap: false,
    });
  } else if (btnName === "Marketcap") {
    setCalculate({
      toFind: btnName,
      firstInput: "Price",
      secondInput: "Supply",

      findingPrice: false,
      findingSupply: false,
      findingMarketcap: true,
    });
  } else if (btnName === "Supply") {
    setCalculate({
      toFind: btnName,
      firstInput: "Price",
      secondInput: "Marketcap",

      findingPrice: false,
      findingSupply: true,
      findingMarketcap: false,
    });
  }
}

function addInputsToValueArray({
  inputs,
  setValuesArray,
  firstInputName,
  secondInputName,
}) {
  const inputsValue = inputs.target.value; //User inputed value
  const inputsName = inputs.target.name; //Name of the input being edited.

  if (inputsName === firstInputName) {
    //updates first input and adds second input to values array so data is
    //not lost.
    //inputsValue is what the user is currently typing.
    //array[1] is the second inputs value.
    setValuesArray((array) => [inputsValue, array[1]]);
  } else if (inputsName === secondInputName) {
    setValuesArray((array) => [array[0], inputsValue]);
  }
}

function findSoultion({ valuesArray, setAnswer, toFind }) {
  const firstValue = valuesArray[1]; //value of what the user put for first input.
  const secondValue = valuesArray[0]; //value of what the user put for second input.

  //Runs one of these depending on what the user wanted to find.
  if (toFind === "Price") {
    //sets the anwser which is passed back to Calculator through props.showAnswer(answer)
    setAnswer(firstValue / secondValue);
  } else if (toFind === "Marketcap") {
    setAnswer(secondValue * firstValue);
  } else if (toFind === "Supply") {
    setAnswer(firstValue / secondValue);
  }
}
export { changeCalc, addInputsToValueArray, findSoultion };

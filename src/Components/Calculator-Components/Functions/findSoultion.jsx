function findSoultion({ valuesArray, setAnswer, toFind }) {
  const firstValue = valuesArray[1]; //value of what the user put for first input.
  const secondValue = valuesArray[0]; //value of what the user put for second input.
  let finalValue;

  //Runs one of these depending on what the user wanted to find.
  if (toFind === "Price") {
    //sets the anwser which is passed back to Calculator through props.showAnswer(answer)
    //also rounds final value to a certain number of decimals.
    finalValue = firstValue / secondValue;

    //sets the value to scientic notation if over 2 trillion for what ever reson
    if (finalValue <= 2000000000000) {
      finalValue = finalValue.toLocaleString(undefined, {
        minimumFractionDigits: 5,
        maximumFractionDigits: 5,
      });
    } else {
      finalValue = finalValue.toExponential();
    }

    setAnswer(finalValue);
  } else if (toFind === "Marketcap") {
    finalValue = secondValue * firstValue;

    if (finalValue <= 2000000000000) {
      finalValue = finalValue.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
    } else {
      finalValue = finalValue.toExponential();
    }

    setAnswer(finalValue);
  } else if (toFind === "Supply") {
    finalValue = firstValue / secondValue;

    if (finalValue <= 2000000000000) {
      finalValue = finalValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      finalValue = finalValue.toExponential();
    }

    setAnswer(finalValue);
  }
}

export default findSoultion;

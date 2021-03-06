import { useState } from "react";
import { Button } from "react-bootstrap";
import Inputs from "./Inputs";
import OutputAnswer from "./OutputAnswer";
import addInputsToValueArray from "./Functions/addInputsToValueArray";
import findSoultion from "./Functions/findSoultion";

import calcBtn from "../../CSS/Calculator/CalcButtons.module.css";
import inputStyles from "../../CSS/Calculator/Inputs.module.css";

function DoCalc(props) {
  const toFind = props.toCalculate.toFind;
  const firstInputName = props.toCalculate.firstInput;
  const secondInputName = props.toCalculate.secondInput;

  // Holds two values so that will be used to find final answer.
  const [valuesArray, setValuesArray] = useState(["", ""]);
  // holds final answer.
  const [answer, setAnswer] = useState("Answer Here");

  function handleInputs(inputs) {
    // When inputs onChange is activated it passes over the values
    // that are inputed by user.
    // Then passes over setValuesArray so that inputs can be applied to it.
    //Also passes over firstInputName and secondInputName from calculate state.
    //This is done so they can be compared with inputs.name
    addInputsToValueArray({
      inputs,
      setValuesArray,
      firstInputName,
      secondInputName,
    });
    setAnswer("Answer Here");
  }

  function handleSubmit() {
    // Takes the values stored in valuesArray and based on what the user is
    // trying toFind findSoultion dose the appropriate math for it.
    // Then the result of that math is applied to answer with the setAnswer
    // function.
    findSoultion({ valuesArray, setAnswer, toFind });
  }

  return (
    <div>
      <div className={inputStyles.inputsDiv}>
        <Inputs
          name={firstInputName}
          handleInputs={handleInputs}
          value={valuesArray[0]}
        />

        <Inputs
          name={secondInputName}
          handleInputs={handleInputs}
          value={valuesArray[1]}
        />
      </div>
      <Button
        variant="default"
        onClick={() => {
          handleSubmit(); //Tells programs to run calculations
          setValuesArray(["", ""]); //Resets array
        }}
        className={calcBtn.submitBtn}
        size="lg"
      >
        Submit
      </Button>

      {/*passes button name over and the anwser. Renders both.*/}
      <OutputAnswer toFind={toFind} answer={answer} />
    </div>
  );
}

export default DoCalc;

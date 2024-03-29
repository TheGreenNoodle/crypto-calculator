import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Inputs from "./Inputs";
import addInputsToValueArray from "./Functions/addInputsToValueArray";
import findSoultion from "./Functions/findSoultion";

import calcBtn from "../../CSS/Calculator/CalcButtons.module.css";
import inputStyles from "../../CSS/Calculator/Inputs.module.css";

function DoCalc(props) {
  const toFind = props.toCalculate.toFind;
  const firstInputName = props.toCalculate.firstInput;
  const secondInputName = props.toCalculate.secondInput;
  const setAnswer = props.setAnswer;

  // Holds two values so that will be used to find final answer.
  const [valuesArray, setValuesArray] = useState(["", ""]);
  // holds final answer.

  //Refs are used to determine if the input is active
  // This is done so that when the user clicks on the input the value
  // returns to its number value. EX 89454. When the user clicks off the
  // number in the input can be seen as 89,454. This helps with readability
  // and dose not break the calculation code.
  const inputOne = useRef(null);
  const inputTwo = useRef(null);

  function handleInputs(inputs) {
    // When inputs onChange is activated it passes over the values
    // that are inputted by user.
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
    <div className={inputStyles.inputAndSubmitBox}>
      <div className={inputStyles.inputGroup}>
        <Inputs
          ref={inputOne}
          name={firstInputName}
          handleInputs={handleInputs}
          value={valuesArray[0]}
        />

        <Inputs
          ref={inputTwo}
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
        size="lg">
        Submit
      </Button>
    </div>
  );
}

export default DoCalc;

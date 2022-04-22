import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { addInputsToValueArray, findSoultion } from "./CalculatorFunctions";
import calculatorStyles from "../../CSS/Calculator.module.css";

function DoCalc(props) {
  const toFind = props.toCalculate.toFind;
  const firstInputName = props.toCalculate.firstInput;
  const secondInputName = props.toCalculate.secondInput;

  // Put all of this into another compant.
  // Holds two values so that will be used to find final answer.
  const [valuesArray, setValuesArray] = useState(["", ""]);
  // holds final answer.
  const [answer, setAnswer] = useState("");

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
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {firstInputName} {/*Renders name of first input*/}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + firstInputName.toLowerCase() + " here"}
          type="Number"
          onChange={handleInputs} //Runs handleInput to update valuesArray
          name={firstInputName}
          value={valuesArray[0]}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {secondInputName} {/*Renders name of second input*/}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + secondInputName.toLowerCase() + " here"}
          type="Number"
          onChange={handleInputs}
          name={secondInputName}
          value={valuesArray[1]}
        />
      </InputGroup>

      <Button
        onClick={() => {
          handleSubmit(); //Tells programs to run calculations
          props.showAnswer(answer); //Passes over anwser to calculator
          setValuesArray(["", ""]); //Resets array
        }}
        className={`${calculatorStyles.customBtn} ${calculatorStyles.customBtnMarket}`}
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}

export default DoCalc;

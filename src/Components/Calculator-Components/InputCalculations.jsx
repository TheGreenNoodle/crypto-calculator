import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import DoCalc from "./DoCalc";
import calculatorStyles from "../../CSS/Calculator.module.css";

function InputCalc(props) {
  const toFind = props.find.toFind;
  const firstInputName = props.find.firstInput;
  const secondInputName = props.find.secondInput;

  // Put all of this into another compant
  const [valueArray, setValueArray] = useState(["", ""]);
  const [answer, setAnswer] = useState("");

  function handleInputs(input) {
    const inputsValue = input.target.value;
    const inputsName = input.target.name;

    if (inputsName === firstInputName) {
      setValueArray((array) => [inputsValue, array[1]]);
    } else if (inputsName === secondInputName) {
      setValueArray((array) => [array[0], inputsValue]);
    }
  }

  function doCalc() {
    const firstValue = valueArray[1];
    const secondValue = valueArray[0];

    //check
    if (toFind === "Price") {
      setAnswer(firstValue / secondValue);
    } else if (toFind === "Marketcap") {
      setAnswer(secondValue * firstValue);
    } else if (toFind === "Supply") {
      setAnswer(firstValue / secondValue);
    }
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {firstInputName}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + firstInputName.toLowerCase() + " here"}
          type="Number"
          onChange={handleInputs}
          name={firstInputName}
          value={valueArray[0]}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {secondInputName}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + secondInputName.toLowerCase() + " here"}
          type="Number"
          onChange={handleInputs}
          name={secondInputName}
          value={valueArray[1]}
        />
      </InputGroup>

      <Button
        onClick={() => {
          doCalc();
          props.showAnswer(answer.toFixed(2));
          setValueArray(["", ""]);
        }}
        className={`${calculatorStyles.customBtn} ${calculatorStyles.customBtnMarket}`}
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}

export default InputCalc;

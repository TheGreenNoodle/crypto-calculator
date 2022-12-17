import { useState, forwardRef } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import inputStyles from "../../CSS/Calculator/Inputs.module.css";

const commaNumber = require("comma-number");

const Inputs = forwardRef((props, ref) => {
  const rawValue = props.value;
  const valueWithCommas = commaNumber(rawValue);

  //Remove commas so that if the user decides to change a number already
  //put in the input dose not return NaN
  const value = rawValue.replaceAll(",", "");

  const [addCommas, setAddCommas] = useState(true);

  // const input = ref.current;
  // const valueAttribute = input.getAttribute("value");

  // console.log(valueAttribute);

  return (
    <div>
      <h3 className={inputStyles.titles}>{props.name}</h3>
      <InputGroup className="mb-3">
        <FormControl
          ref={ref}
          autoComplete="off"
          className={inputStyles.textBox}
          placeholder={props.name + " here"}
          type="text"
          onChange={props.handleInputs} //Runs handleInput to update valuesArray
          name={props.name}
          value={document.onchange !== ref.current ? valueWithCommas : value}
        />
      </InputGroup>
    </div>
  );
});

export default Inputs;

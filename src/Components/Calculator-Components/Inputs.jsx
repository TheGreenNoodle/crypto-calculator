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
  //Decides if observer is active so it is not re run a million times
  const [active, setActive] = useState(false);

  // create a new instance of `MutationObserver` named `observer`,
  // passing it a callback function
  function addObserver() {
    const input = ref.current;

    if (input === null) {
      window.setTimeout(addObserver, 500);
      return;
    }

    const observeChange = new MutationObserver(() => {
      setAddCommas(false);
      setActive(true);

      console.log("change");
    });

    observeChange.observe(input, { attributes: true });
  }

  if (!active) {
    addObserver();
  }

  return (
    <div>
      <h3 className={inputStyles.titles}>{props.name}</h3>
      <InputGroup className="mb-3">
        <FormControl
          ref={ref}
          autoComplete="off"
          className={inputStyles.textBox}
          placeholder={props.name + " here"}
          type="number"
          onChange={props.handleInputs} //Runs handleInput to update valuesArray
          name={props.name}
          value={props.value}
        />
      </InputGroup>
    </div>
  );
});

export default Inputs;

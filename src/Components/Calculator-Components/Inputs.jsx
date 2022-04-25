import { InputGroup, FormControl } from "react-bootstrap";
import calculatorStyles from "../../CSS/Calculator.module.css";

function Inputs(props) {
  let nameLower = props.name.toLowerCase();
  return (
    <div className={calculatorStyles.inputsDiv}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {props.name} {/*Renders name of one of the two inputs*/}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + nameLower + " here"}
          type="Number"
          onChange={props.handleInputs} //Runs handleInput to update valuesArray
          name={props.name}
          value={props.value}
        />
      </InputGroup>
    </div>
  );
}

export default Inputs;

import { InputGroup, FormControl } from "react-bootstrap";
import calculatorStyles from "../../CSS/Calculator.module.css";

function Inputs(props) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text className={calculatorStyles.inputTag}>
        {props.name} {/*Renders name of one of the two inputs*/}
      </InputGroup.Text>
      <FormControl
        className={calculatorStyles.textBox}
        placeholder={props.name + " here"}
        type="number"
        onChange={props.handleInputs} //Runs handleInput to update valuesArray
        name={props.name}
        value={props.value}
      />
    </InputGroup>
  );
}

export default Inputs;

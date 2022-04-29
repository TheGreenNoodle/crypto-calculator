import { InputGroup, FormControl } from "react-bootstrap";
import inputStyles from "../../CSS/Calculator/Inputs.module.css";

function Inputs(props) {
  return (
    <div>
      <h3 className={inputStyles.titles}>{props.name}</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text className={inputStyles.inputTag}>
          {props.name} {/*Renders name of one of the two inputs*/}
        </InputGroup.Text>
        <FormControl
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
}

export default Inputs;

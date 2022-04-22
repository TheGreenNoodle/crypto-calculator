import { InputGroup, FormControl } from "react-bootstrap";

function Inputs(props) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">
        {props.name} {/*Renders name of one of the two inputs*/}
      </InputGroup.Text>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder={"Enter " + props.name.toLowerCase() + " here"}
        type="Number"
        onChange={props.handleInputs} //Runs handleInput to update valuesArray
        name={props.name}
        value={props.value}
      />
    </InputGroup>
  );
}

export default Inputs;

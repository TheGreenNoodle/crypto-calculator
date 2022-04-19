import { InputGroup, FormControl } from "react-bootstrap";
import calculatorStyles from "../../CSS/Calculator.module.css";

function CalcPrice(props) {
  return (
    <div>
      <h3>Center</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">$</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Price"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">$</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Price"
        />
      </InputGroup>
    </div>
  );
}

export default CalcPrice;

import { InputGroup, FormControl, Button } from "react-bootstrap";
import calculatorStyles from "../../CSS/Calculator.module.css";

function CalcPrice(props) {
  const firstInput = props.find.firstInput;
  const secondInput = props.find.secondInput;

  return (
    <div>
      <h3>{"Make button be active to show what user is finding"}</h3>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {firstInput}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + firstInput.toLowerCase() + " here"}
          type="Number"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          {secondInput}
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={"Enter " + secondInput.toLowerCase() + " here"}
          type="Number"
        />
      </InputGroup>

      <Button
        // onClick={"props.onClick"}
        className={`${calculatorStyles.customBtn} ${calculatorStyles.customBtnMarket}`}
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}

export default CalcPrice;

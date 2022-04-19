import { Button, Col } from "react-bootstrap";
import calculatorStyles from "../../CSS/Calculator.module.css";

function CalcBtn(props) {
  return (
    <Col>
      <Button onClick={props.onClick} className={props.className} size="lg">
        {props.btnName}
      </Button>
    </Col>
  );
}

export default CalcBtn;

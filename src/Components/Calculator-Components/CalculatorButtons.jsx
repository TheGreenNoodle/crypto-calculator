import { Button, Col } from "react-bootstrap";

function CalcBtn(props) {
  return (
    <Col>
      <Button
        onClick={props.changeCalculate}
        className={props.className}
        name={props.name}
        size="lg"
      >
        {props.btnName}
      </Button>
    </Col>
  );
}

export default CalcBtn;

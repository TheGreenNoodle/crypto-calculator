import { Button, Col } from "react-bootstrap";

function CalcBtn(props) {
  return (
    <Col>
      <Button
        variant="default"
        onClick={props.changeCalculate}
        className={props.className}
        name={props.name}
        size="lg"
      >
        {props.name}
      </Button>
    </Col>
  );
}

export default CalcBtn;

import { Button } from "react-bootstrap";

function CalcBtn(props) {
  return (
    <Button
      variant="default"
      onClick={props.changeCalculate}
      className={props.className}
      name={props.name}
      size="lg"
    >
      {props.name}
    </Button>
  );
}

export default CalcBtn;

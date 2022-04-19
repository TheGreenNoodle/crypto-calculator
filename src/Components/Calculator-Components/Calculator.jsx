import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import calculatorStyles from "../../CSS/Calculator.module.css";
import CalcBtn from "./CalculatorButtons";
import InputCalculations from "./InputCalculations";

function Calculator() {
  // const [calc, setCalc] = useState({
  //   price: {
  //     false,
  //     name: ""
  //   }
  // });

  const [price, setPrice] = useState(false);
  const [name, setName] = useState("");

  function calculatePrice() {
    price ? setPrice(false) : setPrice(true);
    setName();
  }

  return (
    <div className={calculatorStyles.padding}>
      <Container>
        <Row>
          <h3>Calculate</h3>
        </Row>
        <Row>
          <CalcBtn
            onClick={calculatePrice}
            className={calculatorStyles.customBtn}
            btnName="Price"
          ></CalcBtn>
          <CalcBtn
            onClick={calculatePrice}
            className={
              (calculatorStyles.customBtn, calculatorStyles.customBtnMarket)
            }
            btnName="Marketcap"
          ></CalcBtn>
          <CalcBtn
            onClick={calculatePrice}
            className={calculatorStyles.customBtn}
            btnName="Supply"
          ></CalcBtn>
        </Row>

        <Row>{price ? <InputCalculations /> : null}</Row>
      </Container>
    </div>
  );
}

export default Calculator;

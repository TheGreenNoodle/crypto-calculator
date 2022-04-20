import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CalcBtn from "./CalculatorButtons";
import InputCalculations from "./InputCalculations";
import calculatorStyles from "../../CSS/Calculator.module.css";

const customBtn = calculatorStyles.customBtn;
const activeBtn = `${customBtn} ${calculatorStyles.activeBtn}`;
const capBtn = calculatorStyles.customBtnMarket;

function Calculator() {
  const [toCalc, setToCalc] = useState({
    toFind: "Price",
    firstInput: "Supply",
    secondInput: "Marketcap",
    priceActive: true,
    supplyActive: false,
    capActive: false,
  });

  function calculatePrice(btn) {
    const name = btn.target.name;
    if (name === "Price") {
      setToCalc({
        toFind: name,
        firstInput: "Supply",
        secondInput: "Marketcap",

        priceActive: true,
        supplyActive: false,
        capActive: false,
      });
    } else if (name === "Marketcap") {
      setToCalc({
        toFind: name,
        firstInput: "Price",
        secondInput: "Supply",

        priceActive: false,
        supplyActive: false,
        capActive: true,
      });
    } else if (name === "Supply") {
      setToCalc({
        toFind: name,
        firstInput: "Price",
        secondInput: "Marketcap",

        priceActive: false,
        supplyActive: true,
        capActive: false,
      });
    }
  }

  return (
    <div className={calculatorStyles.padding}>
      <Container>
        <Row>
          <h3>Calculate</h3>
        </Row>
        <Row>
          <CalcBtn
            changeInputs={calculatePrice}
            className={toCalc.priceActive ? activeBtn : customBtn}
            btnName="Price"
            name="Price"
          ></CalcBtn>

          <CalcBtn
            changeInputs={calculatePrice}
            className={
              toCalc.capActive
                ? `${activeBtn} ${capBtn}`
                : `${customBtn} ${capBtn}`
            }
            btnName="Marketcap"
            name="Marketcap"
          ></CalcBtn>

          <CalcBtn
            changeInputs={calculatePrice}
            className={toCalc.supplyActive ? activeBtn : customBtn}
            btnName="Supply"
            name="Supply"
          ></CalcBtn>
        </Row>
        <Row>
          <InputCalculations find={toCalc} />
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;

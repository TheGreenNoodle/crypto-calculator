import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CalcBtn from "./CalculatorButtons";
import InputCalculations from "./InputCalculations";
import ShowAnswer from "./ShowAnswer";
import calculatorStyles from "../../CSS/Calculator.module.css";

const customBtn = calculatorStyles.customBtn;
const activeBtn = `${customBtn} ${calculatorStyles.activeBtn}`;
const capBtn = calculatorStyles.customBtnMarket;

function Calculator() {
  // Put all of this into another compant
  const [gotAnswer, setGotAnswer] = useState(false);
  const [toCalc, setToCalc] = useState({
    toFind: "Marketcap",
    firstInput: "Price",
    secondInput: "Supply",
    priceActive: false,
    supplyActive: false,
    capActive: true,
  });

  function setToFind(btn) {
    const name = btn.target.name;
    if (name === "Price") {
      setGotAnswer(false);

      setToCalc({
        toFind: name,
        firstInput: "Supply",
        secondInput: "Marketcap",

        priceActive: true,
        supplyActive: false,
        capActive: false,
      });
    } else if (name === "Marketcap") {
      setGotAnswer(false);

      setToCalc({
        toFind: name,
        firstInput: "Price",
        secondInput: "Supply",

        priceActive: false,
        supplyActive: false,
        capActive: true,
      });
    } else if (name === "Supply") {
      setGotAnswer(false);

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
  // Put all of this into another compant
  let answer = "";
  function showAnswer(soultion) {
    setGotAnswer(true);
    answer = soultion;
  }

  return (
    <div className={calculatorStyles.padding}>
      <Container>
        <Row>
          <h3>Calculate</h3>
        </Row>
        <Row>
          <CalcBtn
            changeInputs={setToFind}
            className={toCalc.priceActive ? activeBtn : customBtn}
            btnName="Price"
            name="Price"
          ></CalcBtn>

          <CalcBtn
            changeInputs={setToFind}
            className={
              toCalc.capActive
                ? `${activeBtn} ${capBtn}`
                : `${customBtn} ${capBtn}`
            }
            btnName="Marketcap"
            name="Marketcap"
          ></CalcBtn>

          <CalcBtn
            changeInputs={setToFind}
            className={toCalc.supplyActive ? activeBtn : customBtn}
            btnName="Supply"
            name="Supply"
          ></CalcBtn>
        </Row>
        <Row>
          {gotAnswer ? (
            <ShowAnswer answer={answer} />
          ) : (
            <InputCalculations find={toCalc} showAnswer={showAnswer} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;

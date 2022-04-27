import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalcBtn from "./CalculatorButtons";
import DoCalculations from "./DoCalculations";
import changeCalc from "./Functions/changeCalc";

import calculatorStyles from "../../CSS/Calculator.module.css";

const customBtn = calculatorStyles.customBtn;
const activeBtn = `${customBtn} ${calculatorStyles.activeBtn}`;
const capBtn = calculatorStyles.customBtnMarket; //marketcap btn custom style

function Calculator() {
  const [calculate, setCalculate] = useState({
    //object that holds inputs and what user is trying to calculate for.
    toFind: "Marketcap", //what user wants to find.
    firstInput: "Price",
    secondInput: "Supply",

    //Shows active button if set to true.
    //This is so the user knows the value they are finding.
    findingPrice: false,
    findingSupply: false,
    findingMarketcap: true,
  });

  function handleChangeCalc(btn) {
    //Actives when the user clicks on a new button such as price or marketcap.
    const btnName = btn.target.name; //holds the name of the button clicked.
    //Passes over button name and setCalculate to CalculatorFunctions.
    //Updates value of calculate to new values based on the btnName.
    changeCalc({ btnName, setCalculate });
  }

  return (
    <div className={calculatorStyles.calcBox}>
      <Container>
        <Row>
          <h2 className={calculatorStyles.calcBoxHeader}>Calculate</h2>
        </Row>

        <Row xs={1} md={2} lg={2} xxl={3} className="justify-content-md-center">
          <Col
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 4, order: 1 }}
            xxl={{ span: 4, order: 1 }}
          >
            <CalcBtn
              changeCalculate={handleChangeCalc} //On button click activates handleChangeCalc.
              className={calculate.findingPrice ? activeBtn : customBtn} //Used to change styles based on if the button is active or not.
              name="Price"
            ></CalcBtn>
          </Col>

          <Col
            sm={{ span: 12, order: 3 }}
            md={{ span: 4, order: 3 }}
            lg={{ span: 4, order: 3 }}
            xxl={{ span: 4, order: 2 }}
          >
            <CalcBtn
              changeCalculate={handleChangeCalc}
              className={
                calculate.findingMarketcap //special style applied to make this btn wider than the rest.
                  ? `${activeBtn} ${capBtn}`
                  : `${customBtn} ${capBtn}`
              }
              name="Marketcap"
            ></CalcBtn>
          </Col>

          <Col
            sm={{ span: 12, order: 3 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 4, order: 2 }}
            xxl={{ span: 4, order: 3 }}
          >
            <CalcBtn
              changeCalculate={handleChangeCalc}
              className={calculate.findingSupply ? activeBtn : customBtn}
              name="Supply"
            ></CalcBtn>
          </Col>
        </Row>

        {/* Passes over what the user wants to find. Changes the input names.
        Dose some math based on inputs. Returns the anwser. */}
        <Row className="justify-content-md-center">
          <DoCalculations toCalculate={calculate} />
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;

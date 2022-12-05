import CalcBtn from "./CalcButtons";
import changeCalc from "./Functions/changeCalc";

//css
import calculatorStyles from "../../CSS/Calculator.module.css";
import calcBtn from "../../CSS/Calculator/CalcButtons.module.css";

const customBtn = calcBtn.customBtn;
const activeBtn = `${customBtn} ${calcBtn.activeBtn}`;

function WhatToCalc(props) {
  const calculate = props.calc;
  const setCalculate = props.setCalc;

  function handleChangeCalc(btn) {
    //Actives when the user clicks on a new button such as price or marketcap.
    const btnName = btn.target.name; //holds the name of the button clicked.
    //Passes over button name and setCalculate to CalculatorFunctions.
    //Updates value of calculate to new values based on the btnName.
    changeCalc({ btnName, setCalculate });
  }

  return (
    <div className={calculatorStyles.calcBox}>
      <h2>Calculate for…</h2>

      <CalcBtn
        changeCalc={handleChangeCalc} //On button click activates handleChangeCalc.
        className={calculate.findingPrice ? activeBtn : customBtn} //Used to change styles based on if the button is active or not.
        name="Price"></CalcBtn>
      <CalcBtn
        changeCalc={handleChangeCalc}
        className={calculate.findingMarketcap ? activeBtn : customBtn}
        name="Market Cap"></CalcBtn>
      <CalcBtn
        changeCalc={handleChangeCalc}
        className={calculate.findingSupply ? activeBtn : customBtn}
        name="Supply"></CalcBtn>
      {/* Passes over what the user wants to find. Changes the input names.
        Dose some math based on inputs. Returns the anwser. */}
    </div>
  );
}

export default WhatToCalc;

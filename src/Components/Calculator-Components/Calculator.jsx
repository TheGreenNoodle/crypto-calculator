//Components
import { useState } from "react";

//Custom Components
import WhatToCalc from "./WhatToCalc";
import DoCalculations from "./DoCalculations";
import OutputAnswer from "./OutputAnswer";

//CSS
import calculatorStyles from "../../CSS/Calculator.module.css";

function Calculator() {
  const [answer, setAnswer] = useState("Answer Here");

  const [calculate, setCalculate] = useState({
    //object that holds inputs and what user is trying to calculate for.
    toFind: "Market Cap", //what user wants to find.
    firstInput: "Price",
    secondInput: "Supply",

    //Shows active button if set to true.
    //This is so the user knows the value they are finding.
    findingPrice: false,
    findingSupply: false,
    findingMarketcap: true,
  });

  return (
    <div>
      <WhatToCalc calc={calculate} setCalc={setCalculate} />

      <div className={calculatorStyles.grid}>
        <DoCalculations toCalculate={calculate} setAnswer={setAnswer} />

        {/*passes button name over and the answer. Renders both.*/}
        <OutputAnswer toFind={calculate.toFind} answer={answer} />
      </div>
    </div>
  );
}

export default Calculator;

import calculatorStyles from "../../CSS/Calculator.module.css";

const commaNumber = require("comma-number");

function OutputAnswer(props) {
  let answer = Number(props.answer).toFixed(2);

  return (
    <div className={calculatorStyles.solutionDiv}>
      <div className={calculatorStyles.titleAndAnswer}>
        <h1>{props.toFind}</h1>
        <h2 className={calculatorStyles.answer}>
          {isNaN(answer) ? "Answer Here" : commaNumber(answer)}
        </h2>
      </div>
    </div>
  );
}

export default OutputAnswer;

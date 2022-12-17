import calculatorStyles from "../../CSS/Calculator.module.css";

const commaNumber = require("comma-number");

function OutputAnswer(props) {
  let answer = Number(props.answer).toFixed(2);

  return (
    <div className={calculatorStyles.solutionDiv}>
      <div className={calculatorStyles.titleAndAnswer}>
        <h1 className={calculatorStyles.title}>{props.toFind}</h1>
        <div className={calculatorStyles.centerSolution}>
          <h2 className={calculatorStyles.solution}>
            {isNaN(answer) ? "Answer Here" : commaNumber(answer)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default OutputAnswer;

import calculatorStyles from "../../CSS/Calculator.module.css";

function OutputAnswer(props) {
  return (
    <div className={calculatorStyles.anwserStyles}>
      <h1>
        {props.toFind} = {props.answer}
      </h1>
    </div>
  );
}

export default OutputAnswer;

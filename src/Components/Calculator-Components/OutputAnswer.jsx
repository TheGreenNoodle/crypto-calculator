import calculatorStyles from "../../CSS/Calculator.module.css";

function OutputAnswer(props) {
  return (
    <div className={calculatorStyles.anwserStyles}>
      <h2>
        {props.toFind} = {props.answer}
      </h2>
    </div>
  );
}

export default OutputAnswer;

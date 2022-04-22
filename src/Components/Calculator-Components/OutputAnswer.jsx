function OutputAnswer(props) {
  return (
    <div>
      <h1>
        {props.toFind} = {props.answer}
      </h1>
    </div>
  );
}

export default OutputAnswer;

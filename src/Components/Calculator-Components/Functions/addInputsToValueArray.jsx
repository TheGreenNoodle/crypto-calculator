function addInputsToValueArray({
  inputs,
  setValuesArray,
  firstInputName,
  secondInputName,
}) {
  const inputsValue = inputs.target.value; //User inputed value
  const inputsName = inputs.target.name; //Name of the input being edited.

  if (inputsName === firstInputName) {
    //updates first input and adds second input to values array so data is
    //not lost.
    //inputsValue is what the user is currently typing.
    //array[1] is the second inputs value.
    setValuesArray((array) => [inputsValue, array[1]]);
  } else if (inputsName === secondInputName) {
    setValuesArray((array) => [array[0], inputsValue]);
  }
}

export default addInputsToValueArray;

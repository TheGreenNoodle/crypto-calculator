const [gotAnswer, setGotAnswer] = useState(false);
const [toCalc, setToCalc] = useState({
  toFind: "Marketcap",
  firstInput: "Price",
  secondInput: "Supply",
  priceActive: false,
  supplyActive: false,
  capActive: true,
});

function setToFind(props) {
  const name = props.target.btnName;
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

export default toCalc;

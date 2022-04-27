function changeCalc({ btnName, setCalculate }) {
  //Takes the buttons name that was passed in and compares it to 3 options.
  //Based on the btnName it configures Calculate object so the right visuals
  //are shown and the user inputs the right values into the right inputs.

  if (btnName === "Price") {
    setCalculate({
      toFind: btnName,
      firstInput: "Supply",
      secondInput: "Marketcap",

      findingPrice: true,
      findingSupply: false,
      findingMarketcap: false,
    });
  } else if (btnName === "Marketcap") {
    setCalculate({
      toFind: btnName,
      firstInput: "Price",
      secondInput: "Supply",

      findingPrice: false,
      findingSupply: false,
      findingMarketcap: true,
    });
  } else if (btnName === "Supply") {
    setCalculate({
      toFind: btnName,
      firstInput: "Price",
      secondInput: "Marketcap",

      findingPrice: false,
      findingSupply: true,
      findingMarketcap: false,
    });
  }
}

export default changeCalc;

import Header from "./Header";
import Calculator from "./Calculator-Components/Calculator";
import Footer from "./Footer";
import appStyles from "../CSS/App.module.css";

function App() {
  return (
    <div className={appStyles.App}>
      <Header />
      <Calculator />
    </div>
  );
}

export default App;

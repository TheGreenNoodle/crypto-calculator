import Header from "./Header";
import Calculator from "./Calculator-Components/Calculator";
import Footer from "./Footer";
import appStyles from "../CSS/App.module.css";

function App() {
  const root = document.getElementById("root");
  const body = document.body;

  root.classList.add(appStyles.root);
  body.classList.add(appStyles.body);

  return (
    <div className={appStyles.App}>
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;

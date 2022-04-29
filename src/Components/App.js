import Header from "./Header";
import Calculator from "./Calculator-Components/Calculator";
import Footer from "./Footer";
import appStyles from "../CSS/App.module.css";

function App() {
  const body = document.body;
  body.classList.add(appStyles.bodyBackground);
  return (
    <div className={appStyles.App}>
      <Header />

      <Calculator />

      <Footer />
    </div>
  );
}

export default App;

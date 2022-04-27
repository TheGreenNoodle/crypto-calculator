import Header from "./Header";
import Calculator from "./Calculator-Components/Calculator";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

import appStyles from "../CSS/App.module.css";

function App() {
  const body = document.body;
  body.classList.add(appStyles.bodyBackground);
  return (
    <div className={appStyles.App}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xxs={2} xs sm={5} md={10} xl xxl={11}>
            <Header />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xxs={2} xs sm={4} md={7} xl xxl={12}>
            <Calculator />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xxs={2} xs sm={5} md={10} xl xxl={11}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

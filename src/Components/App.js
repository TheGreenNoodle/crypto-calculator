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
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Calculator />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

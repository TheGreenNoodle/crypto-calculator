import Header from "./Header";
import Calculator from "./Calculator-Components/Calculator";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

import appStyles from "../CSS/App.module.css";

function App() {
  return (
    <div className={appStyles.App}>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Calculator />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;

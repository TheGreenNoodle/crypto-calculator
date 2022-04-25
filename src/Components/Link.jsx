import { Col } from "react-bootstrap";
import footerStyles from "../CSS/Footer.module.css";

function Link(props) {
  return (
    <Col>
      <div className={footerStyles.link}>
        <a href={props.src}>
          <p className={footerStyles.text}>
            {props.icon} {props.name}
          </p>
        </a>
      </div>
    </Col>
  );
}

export default Link;

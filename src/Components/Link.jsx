import { Col } from "react-bootstrap";
import footerStyles from "../CSS/Footer.module.css";

function Link(props) {
  return (
    <div className={footerStyles.icon}>
      <a href={props.src}>
        <p>
          {props.icon} {props.name}
        </p>
      </a>
    </div>
  );
}

export default Link;

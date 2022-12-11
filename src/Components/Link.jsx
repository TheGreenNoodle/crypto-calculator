//css
import footerStyles from "../CSS/Footer.module.css";

function Link(props) {
  return (
    <div className={footerStyles.iconDiv}>
      <a href={props.src}>
        <p>
          {props.icon} {props.name}
        </p>
      </a>
    </div>
  );
}

export default Link;

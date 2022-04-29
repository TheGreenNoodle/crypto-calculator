function Link(props) {
  return (
    <div style={{ display: "inline" }}>
      <a href={props.src}>
        <p>
          {props.icon} {props.name}
        </p>
      </a>
    </div>
  );
}

export default Link;

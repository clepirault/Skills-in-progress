function CheckboxButton(props) {
  return(
    <div>
      <button type="button" onClick={props.handleChange}>{props.active ? "Click to uncheck the box" : "Click to check the box"}</button>
    </div>
  );
}

export default CheckboxButton;

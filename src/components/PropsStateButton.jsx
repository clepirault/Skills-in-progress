function Button(props){
  return(
    <div>
      <button type="button" onClick={props.handleChange}>{props.active ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Button;
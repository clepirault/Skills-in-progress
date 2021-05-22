function Checkbox(props){
  return(
    <div>
      <label htmlFor="checkbox">Checkbox</label>
      <input id="checkbox" type="checkbox" onChange={props.handleChange} checked={props.active} />
    </div>
  );
}

export default Checkbox;
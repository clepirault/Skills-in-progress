function MapEnfant(props){
  return(
    <div className="contact">
      <p>Je suis {props.name}</p>
      <p>J'ai ans {props.age}</p>
      <p>Je vis à {props.city}</p>
    </div>
  );
}
export default MapEnfant;
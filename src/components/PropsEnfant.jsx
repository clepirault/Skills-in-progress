function PropsEnfant(props){
  const {name, age, city} = props;
  return(
    <div>
      <ul>
        <li>Nom: {name}</li>
        <li>Age: {age}</li>
        <li>Ville: {city}</li>
      </ul>
    </div>
  );
}
export default PropsEnfant;
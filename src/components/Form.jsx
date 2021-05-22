import { useState } from 'react';
import './Global.css';

function Form(){
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log("submit");
  }
  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="lastName">Votre nom :</label>
        <input type="text" value={name} id="lastName" onChange={(event)=>{setName(event.target.value)}} /><br />
        <label htmlFor="firstName">Votre prénom :</label>
        <input type="text" value={firstName} id="firstName" onChange={(event)=>{setFirstName(event.target.value)}} /><br />
        <label htmlFor="age">Votre age :</label>
        <input type="text" value={age} id="age" onChange={(event)=>{setAge(event.target.value)}} /><br />
        <label htmlFor="city">Votre ville :</label>
        <input type="text" value={city} id="city" onChange={(event)=>{setCity(event.target.value)}} />
        <p>Bonjour {name} {firstName}, vous avez {age} ans et habitez à {city}.</p>
        <button type="submit">Cliquez pour confirmer</button>
      </form>
    </div>
  );
}

export default Form;
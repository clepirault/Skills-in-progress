import axios from 'axios';
import { useEffect, useState } from 'react';
import APIDetail from './APIDetail';
import './Global.css';

function APIList() {
  const [wizard, setWizard] = useState([]);
  const [gryffindorOnly, setGriffindorOnly] = useState(false);

  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((data) => {
        setWizard(data);
      });
  }, []);

  const handleClick = () => {
    setGriffindorOnly(!gryffindorOnly);
  };

  return (
    <div className='api'>
      <p>Exercice pour mise en pratique d'Axios</p>
      <h1>Obtenir l'API d'Harry Potter</h1>
      <button type='button' onClick={handleClick}>
        Get gryffindor wizards only
      </button>
      <div className="apiList">
        {wizard
          .filter(
            (element) => !gryffindorOnly || element.house === 'Gryffindor'
          )
          .map((element, index) => (
            <APIDetail key={index} {...element} />
          ))}
      </div>
    </div>
  );
}

export default APIList;

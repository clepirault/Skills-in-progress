import axios from 'axios';
import { useState } from 'react';
import APIDetail from './APIDetail';
import './Global.css';

function APIList() {
  const [item, setItem] = useState([]);
  function getItem() {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((data) => {
        setItem(data);
      });
  }
  return (
    <div className='api'>
      <h1>Obtenir l'API d'Harry Potter</h1>
      <button type='button' onClick={getItem}>
        Get Harry Potter API
      </button>
      {item.map((element, index) => (
        <APIDetail
          key={index}
          {...element}
        />
      ))}
    </div>
  );
}

export default APIList;

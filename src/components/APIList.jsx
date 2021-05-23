import axios from 'axios';
import { useState } from 'react';
import APIDetail from './APIDetail';

function APIList() {
  const [item, setItem] = useState(null);
  function getItem() {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((data) => {
        setItem(data[0]);
      });
  }
  return (
    <div>
      <APIDetail item={item} />
      <button type='button' onClick={getItem}>
        Get Harry Potter
      </button>
    </div>
  );
}

export default APIList;

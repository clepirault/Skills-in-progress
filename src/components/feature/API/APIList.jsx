import axios from 'axios';
import { useEffect, useState } from 'react';
import APIDetail from './APIDetail';
import './API.css';
import Code from '../../commons/Code';
import { TextContent } from '../../../TextContent';

function APIList() {
  const [wizard, setWizard] = useState([]);

  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((data) => {
        setWizard(data);
      });
  }, []);

  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>API d'Harry Potter</h1>
      <input
        type='text'
        placeholder='🔍Rechercher'
        onChange={handleChange}
        className='apiSearch'
      />
      <div className='character'>
        {wizard
          .filter(
            (element) =>
              element.name.toLowerCase().includes(search.toLowerCase()) ||
              element.house.toLowerCase().includes(search.toLowerCase())
          )
          .map((element, index) => (
            <APIDetail key={index} {...element} />
          ))}
      </div>
      <Code link={TextContent.link2} />
    </div>
  );
}

export default APIList;

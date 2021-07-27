import { useContext, useState } from 'react';
import APIDetail from './APIDetail';
import './API.css';
import Code from '../../commons/Code';
import Table from '../../commons/Table';
import { TextContent } from '../../../TextContent';
import { APIContext } from '../../context/APIContext';

function APIList() {
  const { character } = useContext(APIContext);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>API de l'univers Harry Potter</h2>
      <Table>
        <>{TextContent.notion5}</>
        <>{TextContent.notion2}</>
        <>{TextContent.notion4}</>
        <>{TextContent.notion7}</>
        <>{TextContent.notion9} + {TextContent.notion8}</>
      </Table>
      <input
        type='text'
        placeholder='🔍Rechercher'
        onChange={handleChange}
        className='apiSearch'
      />
      <div className='character'>
        {character
          .filter(
            (element) =>
              element.name.toLowerCase().includes(search.toLowerCase()) ||
              element.house.toLowerCase().includes(search.toLowerCase())
          )
          .map((element, index) => (
            <APIDetail key={index} {...element} />
          ))}
      </div>
      <Code link={TextContent.link4} />
    </div>
  );
}

export default APIList;

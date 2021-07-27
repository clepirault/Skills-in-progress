import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const APIContext = createContext(null);

const APIProvider = ({ children }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((data) => {
        setCharacter(data);
      });
  }, []);

  return (
    <APIContext.Provider value={{ character, setCharacter }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
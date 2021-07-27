import { createContext, useState } from 'react';

export const APIContext = createContext(null);

const APIProvider = ({ children }) => {
  const [character, setCharacter] = useState([]);
  return (
    <APIContext.Provider value={{ character, setCharacter }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
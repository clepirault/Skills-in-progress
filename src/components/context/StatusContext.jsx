import { createContext, useState } from 'react';

export const StatusContext = createContext(null);

const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => {
    setStatus(!status);
  }

  return (
    <StatusContext.Provider value={{ status, setStatus, toggleStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
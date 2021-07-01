import { createContext, useState } from 'react';

export const ActivityContext = createContext(null);

const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);

  return (
    <ActivityContext.Provider value={{ activity, setActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
import { useState } from 'react';
import MainRouter from './components/router/MainRouter';
import PeopleContext from './components/context/PeopleContext';
import ActivityProvider from './components/context/ActivityContext';

function App() {
  const [people, setPeople] = useState([]);
  const peopleValues = { people: people, setPeople: setPeople };
  return (
    <div>
      <PeopleContext.Provider value={peopleValues}>
        <ActivityProvider>
          <MainRouter />
        </ActivityProvider>
      </PeopleContext.Provider>
    </div>
  );
}

export default App;

import { useState } from 'react';
import MainRouter from './components/router/MainRouter';
import PeopleContext from './components/context/PeopleContext';

function App() {
  const [people, setPeople] = useState([]);
  const peopleValues = { people: people, setPeople: setPeople };
  return (
    <div>
      <PeopleContext.Provider value={peopleValues}>
        <MainRouter />
      </PeopleContext.Provider>
    </div>
  );
}

export default App;

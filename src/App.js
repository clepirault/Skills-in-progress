import { useState } from 'react';
import MainRouter from './components/router/MainRouter';
import PeopleContext from './components/context/PeopleContext';

function App() {
  const [peopleList, setPeopleList] = useState(null);
  const peopleValues = { peopleList: peopleList, setPeopleList: setPeopleList };
  return (
    <div>
      <PeopleContext.Provider value={peopleValues}>
        <MainRouter />
      </PeopleContext.Provider>
    </div>
  );
}

export default App;

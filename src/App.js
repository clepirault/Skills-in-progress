import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import APIItem from './components/APIItem';
import APIList from './components/APIList';
import Counter from './components/Counter';
import FilterButton from './components/FilterButton';
import FilterParent from './components/FilterParent';
import Form from './components/Form';
import Header from './components/Header';
import Infos from './components/Infos';
import MapParent from './components/MapParent';
import PropsParent from './components/PropsParent';
import Button from './components/PropsStateButton';
import Checkbox from './components/PropsStateCheckbox';
import Timer from './components/Timer';
import ToDoList from './components/ToDoList';

const list = [
  { name: 'Clémence', age: 29, city: 'Nantes' },
  { name: 'Julien', age: 30, city: 'Paris' },
  { name: 'Alice', age: 27, city: 'Lyon' },
  { name: 'Thomas', age: 32, city: 'Nantes' },
];

function App() {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setActive(!active);
  };
  const [isStart, setIsStart] = useState(false);
  const handleClick = () => {
    setIsStart((previousState) => !previousState);
  };
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/todolist'>
            <Header />
            <ToDoList />
          </Route>
          <Route path='/counter'>
            <Header />
            <Counter />
          </Route>
          <Route path='/timer'>
            <Header />
            <div className='timer'>
              <h2>Utiliser UseEffect et le cycle de vie d'un composant</h2>
              <p>Ouvrir la console</p>
              <h1>Compte à rebours</h1>
              {isStart && <Timer />}
              <button type='button' onClick={handleClick}>
                {isStart ? 'Stop timer' : 'Start timer'}
              </button>
            </div>
          </Route>
          <Route path='/Checkbox'>
            <Header />
            <div className='checkbox'>
              <p>Props & State</p>
              <h1>Click the button to check the box</h1>
              <Button active={active} handleChange={handleChange} />
              <Checkbox active={active} handleChange={handleChange} />
            </div>
          </Route>
          <Route exact path='/API'>
            <Header />
            <APIList />
          </Route>
          <Route exact path='/API/:name' component={APIItem} />
            {/* <Header />
            <APIItem />
          </Route> */}
          <Route path='/'>
            <Header />
            <Infos />
          </Route>
        </Switch>
      </Router>
      {/* <PropsParent />
      <MapParent items={list} />
      <FilterParent items={list} />
      <FilterButton items={list} /> */}
      <Form />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
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
import ToDoList from './components/ToDoList';

const list = [
  { name: 'Clémence', age: 29, city: 'Nantes' },
  { name: 'Julien', age: 30, city: 'Paris' },
  { name: 'Alice', age: 27, city: 'Lyon' },
  { name: 'Thomas', age: 32, city: 'Nantes' },
];

function App() {

  const [active, setActive] = useState(true);
  const handleChange = () => {
    setActive(!active);
  };
  
  return (
    <div className='App'>
      <Header />
      <Infos />
      <PropsParent />
      <MapParent items={list} />
      <FilterParent items={list} />
      <FilterButton items={list} />
      <ToDoList />
      <Counter />
      <Form />
      <div className='checkbox'>
        <p>Props & State</p>
        <h1>Click the button to check the box</h1>
        <Button active={active} handleChange={handleChange} />
        <Checkbox active={active} handleChange={handleChange} />
      </div>
      <APIList />
    </div>
  );
}

export default App;

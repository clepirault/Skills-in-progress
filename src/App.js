import './App.css';
import Counter from './components/Counter';
import FilterButton from './components/FilterButton';
import FilterParent from './components/FilterParent';
import Form from './components/Form';
import Header from './components/Header';
import Infos from './components/Infos';
import MapParent from './components/MapParent';
import PropsParent from './components/PropsParent';
import ToDoList from './components/ToDoList';
const list = [
  { name: 'Clémence', age: 29, city: 'Nantes' },
  { name: 'Julien', age: 30, city: 'Paris' },
  {name: 'Alice', age: 27, city: 'Lyon'},
  {name: 'Thomas', age: 32, city: 'Nantes'}
];
function App() {
  return (
    <div className="App">
      <Header />
      <Infos />
      <PropsParent />
      <MapParent items={list} />
      <FilterParent items={list} />
      <FilterButton items={list} />
      <ToDoList />
      <Counter />
      <Form />
    </div>
  );
}

export default App;

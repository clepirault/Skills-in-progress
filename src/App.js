import './App.css';
import Header from './components/Header';
import Infos from './components/Infos';
import MapParent from './components/MapParent';
import PropsParent from './components/PropsParent';
const list = [
  { name: 'Clémence', age: 29, city: 'Nantes' },
  { name: 'Caroline', age: 60, city: 'Nantes' },
];
function App() {
  return (
    <div className="App">
      <Header />
      <Infos />
      <PropsParent />
      <MapParent items={list} />
    </div>
  );
}

export default App;

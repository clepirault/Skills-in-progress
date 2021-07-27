import './Home.css';
import { Link } from 'react-router-dom';
import HomeDetail from './HomeDetail';

function Home() {
  return (
    <div>
      <div className='homeDescription'>
        <h1>Bienvenue !</h1>
        <p>
          Ce site est un support et une mise en application des compétences en <strong>React.js</strong> que je
          développe au sein de ma formation de <strong>Développeuse Web</strong>. <br />
          Parce que la meilleure manière d'apprendre la programmation est de pratiquer. 💪
        </p>
      </div>
      <HomeDetail>
        <Link to='/todolist'>To-do-list</Link>
        <Link to='/counter'>Compteur</Link>
        <Link to="/checkbox">Checkbox</Link>
        <Link to="/api">API Harry Potter</Link>
      </HomeDetail>
    </div>
  );
}

export default Home;

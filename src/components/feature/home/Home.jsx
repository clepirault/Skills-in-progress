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
        <Link to='/todolist' id='1'>To-do-list</Link>
        <Link to='/counter' id='2'>Compteur</Link>
        <Link to="/checkbox" id='3'>Checkbox</Link>
        <Link to="/api" id='4'>API Harry Potter</Link>
      </HomeDetail>
    </div>
  );
}

export default Home;

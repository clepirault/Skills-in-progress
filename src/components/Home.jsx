import MainLayout from './layout/MainLayout';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeDetail from './HomeDetail';

function Home() {
  return (
    <MainLayout>
      <div className='homeDescription'>
        <h1>Bienvenue !</h1>
        <p>
          Ce site est un support et une mise en application des compétences en React que je
          développe au sein de ma formation de Développeuse Web. <br />
          Parce que la meilleure manière d'apprendre la programmation est de pratiquer, pratiquer, pratiquer.
        </p>
      </div>
      <HomeDetail>
        <Link to='/todolist'>To-do-list</Link>
        <Link to='/counter'>Compteur</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/checkbox">Checkbox</Link>
      </HomeDetail>
    </MainLayout>
  );
}

export default Home;

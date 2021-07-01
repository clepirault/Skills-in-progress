import MainLayout from './layout/MainLayout';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeDetail from './HomeDetail';

function Home() {
  return (
    <MainLayout>
      <h1 className='homeTitle'>Bienvenue !</h1>
      <HomeDetail>
        <Link to='/todolist'>To-do-list</Link>
        <Link to='/counter'>Compteur</Link>
      </HomeDetail>
    </MainLayout>
  );
}

export default Home;

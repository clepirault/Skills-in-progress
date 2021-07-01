import { Link } from 'react-router-dom';
import HomeDetail from '../HomeDetail';
import MainLayout from '../layout/MainLayout';

function Context() {
  return (
    <MainLayout>
      <div>
        <p>
          En allant visiter mon repo Github, je peux voir deux techniques pour
          la mise en place du Context dans React. <br /> La première se trouvant
          dans App, j'initialise ici mon State et j'englobe le Router de mon
          Provider. Ainsi je peux utiliser ce Context partout dans l'application. <br /> La seconde se trouve dans le composant de mon Context
          : ActivityContext, où j'y initialise mon State et mets en place les props
          pour mon Provider. On retrouvera ainsi ce dernier dans MainRouter,
          englobant le(s) composant(s) concernés.
        </p>
        <HomeDetail>
          <Link to='/list'>List</Link>

          <Link to='/peoplelist'>People list</Link>

          <Link to='/activitylist'>Activity list</Link>
        </HomeDetail>
      </div>
    </MainLayout>
  );
}

export default Context;

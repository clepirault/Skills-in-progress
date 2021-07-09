import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <ul className="navigation">
        <li className="HomeLink">
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/todolist'>To-do-list</Link>
        </li>
        <li>
          <Link to='/counter'>Compteur</Link>
        </li>
        <li>
          <Link to='/timer'>Timer</Link>
        </li>
        <li>
          <Link to='/checkbox'>Checkbox</Link>
        </li>
        <li>
          <Link to='/context'>Context</Link>
        </li>
        <li>
          <Link to='/API'>API</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

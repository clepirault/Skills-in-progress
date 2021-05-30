import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <ul className='headerNav'>
        <li>
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
          <Link to='/Checkbox'>Checkbox</Link>
        </li>
        <li>
          <Link to='/API'>API</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

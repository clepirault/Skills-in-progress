import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
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
          <Link to='/checkbox'>Checkbox</Link>
        </li>
        <li>
          <Link to='/list'>List</Link>
        </li>
        <li>
          <Link to='/newlist'>New list</Link>
        </li>
        <li>
          <Link to='/API'>API</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

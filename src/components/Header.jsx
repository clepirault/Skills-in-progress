import './Header.css';

function Header(){
  return(
    <div className="header">
      <ul className="headerNav">
        <li>To-do list</li>
        <li>Favoris</li>
        <li>Local storage</li>
      </ul>
    </div>
  );
}

export default Header;
import { useState } from "react";
import FilterEnfant from "./FilterEnfant";
import './Global.css';

function FilterButton(props) {
  const [showResult, setShowResult] = useState(false);
  const handleClick = () => {
    console.log('click');
    setShowResult(!showResult)
  }
  return (
    <div className='filterButton'>
      <h2>
        Ajouter un bouton pour filtrer : je ne veux que les personnes habitant à Paris
      </h2>
      <button type="button" onClick={handleClick}>Paris</button>
      {props.items
        .filter((element) => !showResult || element.city === 'Paris')
        .map((element, index) => (
          <FilterEnfant key={index} {...element} />
        ))}
      <p>J'aimerais bien pouvoir voir s'afficher seulement le bouton sans la liste, et au clic n'avoir que le résultat attendu</p>
    </div>
  );
}

export default FilterButton;
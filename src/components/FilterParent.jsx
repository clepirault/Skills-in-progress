import FilterEnfant from './FilterEnfant';
import './Global.css';

function FilterParent(props) {
  return (
    <div className='filter'>
      <h2>
        Filtrer une liste à partir d'un tableau avec Filter : je ne veux que les
        personnes habitant à Nantes
      </h2>
      {props.items
        .filter((element) => element.city === 'Nantes')
        .map((element, index) => (
          <FilterEnfant key={index} {...element} />
        ))}
    </div>
  );
}

export default FilterParent;

import PropsEnfant from './PropsEnfant';
import './Global.css';

function PropsParent(){
  const details={name: 'Clémence', age: 29, city: 'Nantes'}
  return(
    <div className="props">
      <h2>Passer des Props, utiliser la décomposition (spread operator) et la destructuration</h2>
      <PropsEnfant {...details} />
    </div>
  );
}

export default PropsParent;
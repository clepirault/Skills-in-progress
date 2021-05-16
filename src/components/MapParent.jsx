import MapEnfant from './MapEnfant';
import './Global.css';

function MapParent(props) {
  return (
    <div className="map">
      <h2>Répéter une liste à partir d'un tableau avec Map</h2>
      {props.items.map((element, index) => (
        <MapEnfant key={index} {...element} />
      ))}
    </div>
  );
}

export default MapParent;

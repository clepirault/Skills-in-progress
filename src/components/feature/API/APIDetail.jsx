import { Link } from 'react-router-dom';
import './API.css';

function APIDetail(props) {
  return (
    <div className='characterDetail'>
      <h3>{props.name}</h3>
      <p>{props.house}</p>
      <img src={props.image} alt={props.name} />
      <Link to={`/API/${props.name}`} className="detailLink">
        Detail
      </Link>
    </div>
  );
}

export default APIDetail;

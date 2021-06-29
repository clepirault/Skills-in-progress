import { Link } from 'react-router-dom';

function APIDetail(props) {
  return (
    <div className="apiDetail">
      <h1>Name: {props.name} </h1>
      <h2>House: {props.house} </h2>
      <img className="apiImg" src={props.image} alt={props.name} />
      <Link to={`/API/${props.name}`}>Wizard detail</Link>
    </div>
  );
}

export default APIDetail;

import './Global.css';

function APIDetail(props) {
  return (
    <div className="apiDetail">
      <h1>Name: {props.name} </h1>
      <h2>House: {props.house} </h2>
      <img className="apiImg" src={props.image} alt={props.name} />
    </div>
  );
}

export default APIDetail;

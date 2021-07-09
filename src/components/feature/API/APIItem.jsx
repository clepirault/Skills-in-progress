import { Link } from "react-router-dom";

function APIItem(props) {
  const params = props.match.params;
  return (
    <div className="apiItem">
      <h3>{params.name}</h3>
      <Link to='/API' style={{color: "black"}} >Retour</Link>
    </div>
  );
}

export default APIItem;

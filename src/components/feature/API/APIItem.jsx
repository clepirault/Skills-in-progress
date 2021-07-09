import { Link } from "react-router-dom";

function APIItem(props) {
  const params = props.match.params;
  return (
    <div className="apiItem">
      <h1>{params.name}</h1>
      <Link to='/API' style={{color: "black"}} >Retour</Link>
    </div>
  );
}

export default APIItem;

function DetailList(props) {
  return (
    <div>
      <ul>
        <li>Name: {props.name}</li>
        <li>City: {props.city}</li>
      </ul>
    </div>
  );
}

export default DetailList;

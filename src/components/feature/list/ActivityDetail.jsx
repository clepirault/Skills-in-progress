function ActivityDetail(props) {
  return (
    <div>
      <ul>
        <li>Activité: {props.topic}</li>
        <li>Animateur: {props.teacher}</li>
      </ul>
      
    </div>
  );
}

export default ActivityDetail;

function APIDetail({item}) {
  return (
    item && (
    <div>
      <h1>Name: {item.name} </h1>
      <h2>House: {item.house} </h2>
      <img src={item.image} alt={item.name} />
    </div>)
  );
}

export default APIDetail;

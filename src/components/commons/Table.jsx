import '../commons/Table.css';

function Table(props) {
  return (
    <div>
      <h2 className="tableTitle">{props.tableTitle}</h2>
      <table className="table">
        <tr>
          <th className="tableHead">{props.tableHead}</th>
        </tr>
        {props.children.map((td) => (
          <tr>
            <td>{td}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;

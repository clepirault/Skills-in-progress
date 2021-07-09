import '../commons/Table.css';
import { TextContent } from '../../TextContent';

function Table(props) {
  return (
    <table className='table'>
      <tr>
        <th className='tableHead'>{TextContent.head}</th>
      </tr>
      {props.children.map((td) => (
        <tr>
          <td>{td}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;

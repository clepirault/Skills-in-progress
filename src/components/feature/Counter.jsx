import { useState } from 'react';
import Table from '../commons/Table';
import { TextContent } from '../../TextContent';
import Code from '../commons/Code';

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Compteur</h2>
      <Table>
        <>{TextContent.notion5}</>
        <>{TextContent.notion2}</>
      </Table>
      <div className="counter">
        <div>{counter}</div>
        <button onClick={handleClick} className="counterButton">+1</button>
      </div>
      <Code link={TextContent.link7} />
    </div>
  );
}

export default Counter;

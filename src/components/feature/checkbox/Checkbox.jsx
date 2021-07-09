import { useState } from 'react';
import CheckboxDetail from './CheckboxDetail';
import CheckboxButton from './CheckboxButton';
import Table from '../../commons/Table';
import '../Feature.css';
import { TextContent } from '../../../TextContent';
import Code from '../../commons/Code';

function Checkbox() {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setActive(!active);
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Click the button to check the box</h2>
      <Table>
        <>{TextContent.notion5}</>
        <>{TextContent.notion1}</>
        <>Passer en props le state vers plusieurs composants</>
      </Table>
      <div className='checkbox'>
        <CheckboxButton active={active} handleChange={handleChange} />
        <CheckboxDetail active={active} handleChange={handleChange} />
      </div>
      <Code link={TextContent.link1} />
    </div>
  );
}

export default Checkbox;

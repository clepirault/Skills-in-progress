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
      <div>
        <h2>{TextContent.title1}</h2>
        <Table tableHead={TextContent.head}>
          <>{TextContent.notion5}</>
          <>{TextContent.notion1}</>
          <>{TextContent.notion6}</>
        </Table>
        <div className='checkbox'>
          <CheckboxButton active={active} handleChange={handleChange} />
          <CheckboxDetail active={active} handleChange={handleChange} />
        </div>
      </div>
      <Code link={TextContent.link1}/>
    </div>
  );
}

export default Checkbox;

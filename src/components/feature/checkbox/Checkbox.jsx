import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import CheckboxDetail from './CheckboxDetail';
import CheckboxButton from './CheckboxButton';
import Table from '../../commons/Table';
import '../Feature.css';
import { TextContent } from '../../commons/TextContent';
import Code from '../../commons/Code';

function Checkbox() {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setActive(!active);
  };
  return (
    <MainLayout>
      <div>
        <Table tableTitle={TextContent.title1} tableHead={TextContent.head}>
          <>UseState</>
          <>Props</>
          <>Passer les props vers deux composants enfants</>
        </Table>
        <div className='checkbox'>
          <CheckboxButton active={active} handleChange={handleChange} />
          <CheckboxDetail active={active} handleChange={handleChange} />
        </div>
      </div>
      <Code link={TextContent.link1}/>
    </MainLayout>
  );
}

export default Checkbox;

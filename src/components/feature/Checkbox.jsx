import { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import CheckboxDetail from './CheckboxDetail';
import CheckboxButton from './CheckboxButton';
import Table from '../commons/Table';
import './Feature.css';

const table = {
  title: 'Click the button to check the box',
  head: 'Notions',
};

function Checkbox() {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setActive(!active);
  };
  return (
    <MainLayout>
      <div>
        <Table tableTitle={table.title} tableHead={table.head}>
          <>Props</>
          <>State</>
          <>Trois composants</>
        </Table>
        <div className="checkbox">
          <CheckboxButton active={active} handleChange={handleChange} />
          <CheckboxDetail active={active} handleChange={handleChange} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Checkbox;

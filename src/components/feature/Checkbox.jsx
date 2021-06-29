import { useState } from "react";
import MainLayout from '../layout/MainLayout';

function Checkbox() {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setActive(!active);
  };
  return (
    <MainLayout>
      <p>Props & State</p>
      <h1>Click the button to check the box</h1>
      <button active={active} handleChange={handleChange}>{active}</button>
      <label htmlFor='checkbox'>Checkbox</label>
      <input
        id='checkbox'
        type='checkbox'
        onChange={handleChange}
        checked={active}
      />
    </MainLayout>
  );
}

export default Checkbox;

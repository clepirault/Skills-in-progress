import './Footer.css';
import { useContext } from 'react';
import { StatusContext } from '../context/StatusContext';

function Footer() {
  const { status, toggleStatus } = useContext(StatusContext);
  return (
    <div className='footer'>
      <button onClick={toggleStatus} type='button' className='statusButton'>
        {status ? 'Disconnect ' : 'Connect'}
      </button>
      <h5>© Clepi 2021</h5>
    </div>
  );
}

export default Footer;

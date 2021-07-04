import code from '../images/code.svg';
import './Code.css';

function Code(props) {
  return (
    <div className='codeIcon'>
      <span>Watch the code</span>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <img src={code} alt='code-icon' />
      </a>
    </div>
  );
}

export default Code;

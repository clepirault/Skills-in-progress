import { useState } from 'react';
import { TextContent } from '../../../TextContent';
import Code from '../../commons/Code';
import Table from '../../commons/Table';
import TimerDetail from './TimerDetail';

function Timer() {
  const [isStart, setIsStart] = useState(false);
  const handleClick = () => {
    setIsStart((previousState) => !previousState);
    setTimeout(() => {
      setIsStart(false);
    }, 60000);
  };
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Compte à rebours</h2>
      <Table>
        <>{TextContent.notion5}</>
        <>{TextContent.notion2}</>
        <>{TextContent.notion10}</>
      </Table>
      <div className="timer">
        {isStart && <TimerDetail />}
        <button type='button' onClick={handleClick}>
        {isStart ? 'Stop timer' : 'Start timer'}
        </button>
      </div>
      <Code link={TextContent.link6} />
    </div>
  );
}

export default Timer;

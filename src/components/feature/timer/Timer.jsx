import { useState } from 'react';
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
      <h2>Utiliser UseEffect et le cycle de vie d'un composant</h2>
      <p>Ouvrir la console</p>
      <h1>Compte à rebours</h1>
      {isStart && <TimerDetail />}
      <button type='button' onClick={handleClick}>
        {isStart ? 'Stop timer' : 'Start timer'}
      </button>
    </div>
  );
}

export default Timer;

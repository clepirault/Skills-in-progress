import { useState } from 'react';
import TimerDetail from './TimerDetail';
import MainLayout from '../layout/MainLayout';

function Timer() {
  const [isStart, setIsStart] = useState(false);
  const handleClick = () => {
    setIsStart((previousState) => !previousState);
  };
  return (
    <MainLayout>
      <h2>Utiliser UseEffect et le cycle de vie d'un composant</h2>
      <p>Ouvrir la console</p>
      <h1>Compte à rebours</h1>
      {isStart && <TimerDetail />}
      <button type='button' onClick={handleClick}>
        {isStart ? 'Stop timer' : 'Start timer'}
      </button>
    </MainLayout>
  );
}

export default Timer;

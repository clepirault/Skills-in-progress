import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';

function Timer() {
  const [isStart, setIsStart] = useState(false);
  const handleClick = () => {
    setIsStart((previousState) => !previousState);
  };
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    console.log('compte à rebours lancé');
    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log('compte à rebours interrompu');
    };
  }, []);
  return (
    <MainLayout>
      <h1>{timer}</h1>
      <div>
        <h2>Utiliser UseEffect et le cycle de vie d'un composant</h2>
        <p>Ouvrir la console</p>
        <h1>Compte à rebours</h1>
        {isStart}
        <button type='button' onClick={handleClick}>
          {isStart ? 'Stop timer' : 'Start timer'}
        </button>
      </div>
      </MainLayout>
  );
}

export default Timer;

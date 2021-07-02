import { useEffect, useState } from 'react';

function TimerDetail() {
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
      <div className='timer'>
      <h1>{timer}</h1>
    </div>
  );
}

export default TimerDetail;
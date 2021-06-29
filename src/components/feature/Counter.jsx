import { useState } from 'react';
import MainLayout from '../layout/MainLayout';

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <MainLayout>
      <p>Un autre exercice simple :</p>
      <h1>Compteur basique</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </MainLayout>
  );
}

export default Counter;

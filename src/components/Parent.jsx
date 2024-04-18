import React, { useState } from 'react';
import Header from './Header';
import Commerce from './Commerce';
import { useCounter } from './components/Function';

function ParentComponent() {
  const { countRecieve, setCountRecieve } = useCounter();

  const handleAddToCart = () => {
    setCountRecieve(prevCount => prevCount + 1);
  };

  return (
    <div>
      <Header countRecieve={countRecieve} />
      <Commerce onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ParentComponent;

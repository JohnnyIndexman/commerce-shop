import { useState } from 'react';

export const useCounter = () => {
  const [countRecieve, setCountRecieve] = useState(0);
  const [counter, setCounter] = useState(0);

  const positiveCount = () => {
    setCounter(prevCount => prevCount + 1)
  }

  const negativeCount = () => {
    setCounter(prevCount => prevCount - 1)
  }

  const handleSubmit = (e) => {
    if(e){
      e.preventDefault();
    }
    const updatedCountRecieve = countRecieve + counter;
    setCountRecieve(updatedCountRecieve);
    console.log(`counterRecieve: ${updatedCountRecieve}`)
    console.log(`counter: ${counter}`)
    setCounter(0); 
    
  };

  
  

  return {
    countRecieve,
    setCountRecieve,
    counter,
    setCounter,
    handleSubmit, 
    positiveCount,
    negativeCount
  };
};


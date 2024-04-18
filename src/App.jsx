import { ChakraProvider, Box } from '@chakra-ui/react'
import './App.css';
import Commerce from './Commerce';
import Header from './components/Header';
import { useCounter } from './components/Function';
import { CounterContext } from './Context/Context';

function App() {

  const { countRecieve, setCountRecieve, counter, handleSubmit, positiveCount, negativeCount } = useCounter();


  const handleAddToCart = (e) => {
    if(e){
      e.preventDefault()
    }
      const updatedCountRecieve = countRecieve + counter;
      console.log(counter)
      setCountRecieve(updatedCountRecieve);
      handleSubmit(e)
   
    
  };
  return (
    <ChakraProvider>
      <CounterContext.Provider
        value={{ countRecieve, counter, positiveCount, negativeCount, handleSubmit }}
      >
        <Box
          py='2'
          width={['100%', '100%', '80%']}
          mx='auto'
          mb='2'
        >
          <Header /*countReceive={countRecieve}*/ />
          <Commerce onAddToCart={(e) => handleAddToCart(e)} />
        </Box>
      </CounterContext.Provider>
    </ChakraProvider>

  );
}

export default App;

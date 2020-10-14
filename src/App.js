import React, { useCallback } from 'react';
import store from './redux';
import './App.css';
import Counter from './Counter';

const App = () => {

  const handleIncrementCounter = useCallback(() => {
    store.dispatch({ type: 'INCREMENT' })
  }, []);

  const handleDecrementCounter = useCallback(() => {
    store.dispatch({ type: 'DECREMENT'})
  }, [])

  return (
    <Counter 
      onIncrement={handleIncrementCounter}
      onDecrement={handleDecrementCounter} 
      value={store.getState()} 
    />
  )
}

export default App;

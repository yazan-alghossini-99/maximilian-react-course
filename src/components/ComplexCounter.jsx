import { useReducer, useCallback } from 'react';
import { counterReducer } from '../reducers/counterReducer';

function ComplexCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), []);
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), []);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default ComplexCounter;

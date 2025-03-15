import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/reduxStore';
import useCounterStore from '../store/zustandStore';

const ReduxZustand = () => {
  // Redux state and dispatch
  const reduxCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // Zustand state and actions
  const { value: zustandCount, increment: zustandIncrement, decrement: zustandDecrement, reset: zustandReset } = useCounterStore();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '40px' }}>
      
      {/* Redux Division */}
      <div style={{ textAlign: 'center', padding: '20px', border: '2px solid #007bff', borderRadius: '10px' }}>
        <h2>Redux Counter</h2>
        <p style={{ fontSize: '20px' }}>Count: {reduxCount}</p>
        <button onClick={() => dispatch(increment())} style={buttonStyle}>Increment</button>
        <button onClick={() => dispatch(decrement())} style={buttonStyle}>Decrement</button>
        <button onClick={() => dispatch(reset())} style={buttonStyle}>Reset</button>
      </div>

      {/* Zustand Division */}
      <div style={{ textAlign: 'center', padding: '20px', border: '2px solid #ffc107', borderRadius: '10px' }}>
        <h2>Zustand Counter</h2>
        <p style={{ fontSize: '20px' }}>Count: {zustandCount}</p>
        <button onClick={zustandIncrement} style={buttonStyle}>Increment</button>
        <button onClick={zustandDecrement} style={buttonStyle}>Decrement</button>
        <button onClick={zustandReset} style={buttonStyle}>Reset</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ReduxZustand;

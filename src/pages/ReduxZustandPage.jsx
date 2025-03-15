// ReduxZustand.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, updateText, clearText } from '../store/reduxStore';
import useCounterStore from '../store/zustandStore';

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardStyle = {
  textAlign: 'center',
  padding: '20px',
  margin: '10px',
  border: '2px solid #ddd',
  borderRadius: '15px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const ReduxZustand = () => {
  // Redux state and dispatch
  const reduxCount = useSelector((state) => state.counter.value);
  const reduxText = useSelector((state) => state.text.value);
  const dispatch = useDispatch();

  // Zustand state and actions
  const { value: zustandCount, increment: zustandIncrement, decrement: zustandDecrement, reset: zustandReset } = useCounterStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', margin: '40px' }}>
      
      {/* Explanation Card */}
      <div style={{ 
  ...cardStyle, 
  backgroundColor: '#f0f0f0', 
  width: '80%', 
  padding: '30px', 
  textAlign: 'left', 
  position: 'relative',
  border: '2px solid #333',
}}>
  <h2 style={{ 
    marginBottom: '15px', 
    fontSize: '28px', 
    fontWeight: 'bold', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px',
  }}>
    🔍 Understanding Redux
  </h2>
  <p style={{ 
    fontSize: '18px', 
    marginBottom: '10px', 
    lineHeight: '1.6',
  }}>
    <span style={{ fontWeight: 'bold', color: '#007bff' }}>Redux</span> is a predictable state container for JavaScript apps. It helps you manage the state of your application in a centralized way, making debugging and testing easier.
  </p>
  <p style={{ 
    fontSize: '18px', 
    marginBottom: '10px', 
    lineHeight: '1.6',
  }}>
    Redux revolves around three core concepts:
    <ul style={{ marginLeft: '20px' }}>
      <li><b>Store:</b> A single source of truth that holds the application state.</li>
      <li><b>Actions:</b> Plain JavaScript objects that describe changes in the state.</li>
      <li><b>Reducers:</b> Pure functions that determine how the state changes based on actions.</li>
    </ul>
  </p>
  <p style={{ 
    fontSize: '18px', 
    marginBottom: '10px', 
    lineHeight: '1.6',
  }}>
    <b>Common Functions in Redux:</b>
    <ul style={{ marginLeft: '20px' }}>
      <li>
        <b>createStore(reducer, [preloadedState], [enhancer]):</b> Creates a Redux store that holds the complete state tree.
        <br /><i>Parameters:</i>
        <ul>
          <li><b>reducer:</b> A function that returns the next state tree.</li>
          <li><b>preloadedState:</b> (optional) The initial state.</li>
          <li><b>enhancer:</b> (optional) Store enhancer like middleware.</li>
        </ul>
      </li>
      <li>
        <b>dispatch(action):</b> Sends an action to the store to trigger a state change.
        <br /><i>Parameters:</i> An action object.
      </li>
      <li>
        <b>getState():</b> Retrieves the current state of the store.
      </li>
      <li>
        <b>subscribe(listener):</b> Adds a change listener that runs when the state updates.
        <br /><i>Parameters:</i> A callback function to run on state changes.
      </li>
      <li>
        <b>combineReducers(reducers):</b> Merges multiple reducers into a single reducing function.
        <br /><i>Parameters:</i> An object whose values are reducer functions.
      </li>
    </ul>
  </p>
  <p style={{ 
    fontSize: '16px', 
    color: '#555', 
    marginTop: '20px', 
    fontStyle: 'italic',
  }}>
    💡 Tip: Use middleware like <b>redux-thunk</b> to handle asynchronous actions more efficiently.
  </p>
</div>



      {/* Redux Counter Division */}
      <div style={{ ...cardStyle, backgroundColor: '#e0f7fa' }}>
        <h2 style={{ marginBottom: '10px' }}>Redux Counter</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {reduxCount}</p>
        <button 
          style={{ ...buttonStyle, backgroundColor: '#007bff', color: '#fff' }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)', e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)', e.target.style.boxShadow = 'none')}
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button 
          style={{ ...buttonStyle, backgroundColor: '#6c757d', color: '#fff' }}
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button 
          style={{ ...buttonStyle, backgroundColor: '#dc3545', color: '#fff' }}
          onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>

      {/* Redux Text Input Division */}
     

<div style={{ 
  ...cardStyle, 
  backgroundColor: '#2c2c2c', 
  color: '#e0e0e0', 
  padding: '25px', 
  marginBottom: '20px', 
  borderRadius: '12px', 
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
  width: '80%',
}}>
  <h2 style={{ 
    marginBottom: '15px', 
    fontSize: '26px', 
    fontWeight: 'bold', 
    color: '#28a745' 
  }}>
    ✏️ Redux Text Input
  </h2>
  <input 
    type="text" 
    value={reduxText} 
    onChange={(e) => dispatch(updateText(e.target.value))} 
    placeholder="Type something..." 
    style={{ 
      padding: '10px', 
      marginBottom: '15px', 
      borderRadius: '8px', 
      width: '70%', 
      backgroundColor: '#333', 
      color: '#fff', 
      border: '1px solid #555',
      outline: 'none',
      fontSize: '16px',
    }} 
  />
  <button 
    style={{ 
      ...buttonStyle, 
      backgroundColor: '#28a745', 
      color: '#fff', 
      padding: '8px 16px', 
      marginLeft: '10px', 
      borderRadius: '8px', 
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
    }}
    onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
    onClick={() => dispatch(clearText())}
  >
    Clear
  </button>
  <p style={{ 
    marginTop: '15px', 
    fontSize: '18px', 
    fontWeight: 'bold', 
    color: '#ccc' 
  }}>
    📄 Current Text: <span style={{ color: '#28a745' }}>{reduxText}</span>
  </p>
</div>

{/* Zustand Implementation and Design */}
<div style={{ 
  ...cardStyle, 
  backgroundColor: '#ffd700', // Bright yellow background
  color: '#000', // Black text
  padding: '30px', 
  marginBottom: '20px', 
  borderRadius: '12px', 
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
  width: '80%',
}}>
  <h3 style={{ 
    marginBottom: '15px', 
    fontSize: '28px', 
    fontWeight: 'bold', 
    color: '#000' 
  }}>
    ⚡ Zustand: Lightweight State Management
  </h3>
  <p style={{ 
    fontSize: '20px', 
    lineHeight: '1.6', 
    marginBottom: '15px', 
    color: '#000' 
  }}>
    Zustand is a small, fast, and scalable state management library for React applications. It offers a minimalistic way to manage state without the need for complex configuration or boilerplate code.
  </p>
  <p style={{ 
    fontSize: '20px', 
    lineHeight: '1.6', 
    marginBottom: '15px', 
    color: '#000' 
  }}>
    The <code>create</code> method in Zustand helps build a store, which is then accessed via hooks for state management. This makes Zustand a great choice for applications that need simple yet powerful global state management.
  </p>
  <p style={{ 
    fontSize: '20px', 
    lineHeight: '1.6', 
    color: '#000' 
  }}>
    In our implementation, we manage a counter state with increment, decrement, and reset functions. Zustand's simplicity allows for seamless integration with React components.
  </p>
</div>

{/* Zustand Counter Division */}
<div style={{ 
  ...cardStyle, 
  backgroundColor: '#ffea00', // Lighter yellow for the counter section
  color: '#000', 
  padding: '25px', 
  marginBottom: '20px', 
  borderRadius: '12px', 
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
  width: '80%',
}}>
  <h2 style={{ 
    marginBottom: '15px', 
    fontSize: '28px', 
    fontWeight: 'bold', 
    color: '#000' 
  }}>
    🌀 Zustand Counter
  </h2>
  <p style={{ 
    fontSize: '32px', 
    fontWeight: 'bold', 
    marginBottom: '20px', 
    color: '#000' 
  }}>
    💡 Count: <span>{zustandCount}</span>
  </p>
  <button 
    style={{ 
      ...buttonStyle, 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '12px 24px', 
      margin: '5px', 
      borderRadius: '8px', 
      cursor: 'pointer',
      transition: 'transform 0.2s ease, background-color 0.3s ease',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
    onClick={zustandIncrement}
  >
    ➕ Increment
  </button>
  <button 
    style={{ 
      ...buttonStyle, 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '12px 24px', 
      margin: '5px', 
      borderRadius: '8px', 
      cursor: 'pointer',
      transition: 'transform 0.2s ease, background-color 0.3s ease',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
    onClick={zustandDecrement}
  >
    ➖ Decrement
  </button>
  <button 
    style={{ 
      ...buttonStyle, 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '12px 24px', 
      margin: '5px', 
      borderRadius: '8px', 
      cursor: 'pointer',
      transition: 'transform 0.2s ease, background-color 0.3s ease',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
    onClick={zustandReset}
  >
    🔄 Reset
  </button>
</div>


    </div>
  );
};

export default ReduxZustand;

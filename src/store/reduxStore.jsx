// src/store/reduxStore.jsx

// Import necessary functions from Redux Toolkit and React-Redux
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

/* 
  Counter Slice:
  - A slice represents a portion of the Redux state and the logic to manage it.
  - Here, we create a slice named 'counter' to handle counting operations.
  - The initial state has a single property 'value' initialized to 0.
  - The reducers define functions to update the state, which are:
    1. increment: Increases the counter value by 1.
    2. decrement: Decreases the counter value by 1.
    3. reset: Resets the counter value to 0.
*/
const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState: { value: 0 }, // Initial state of the counter
  reducers: {
    increment: (state) => { state.value += 1; }, // Increment action
    decrement: (state) => { state.value -= 1; }, // Decrement action
    reset: (state) => { state.value = 0; }, // Reset action
  },
});

/* 
  Text Slice:
  - This slice manages a simple text state.
  - The initial state has a single property 'value' initialized to an empty string.
  - The reducers define functions to update and clear the text:
    1. updateText: Updates the state with the given text.
    2. clearText: Clears the current text and sets it to an empty string.
*/
const textSlice = createSlice({
  name: 'text', // Name of the slice
  initialState: { value: '' }, // Initial state of the text
  reducers: {
    updateText: (state, action) => { state.value = action.payload; }, // Update text action
    clearText: (state) => { state.value = ''; }, // Clear text action
  },
});

// Export the action creators for both slices
export const { increment, decrement, reset } = counterSlice.actions;
export const { updateText, clearText } = textSlice.actions;

/* 
  Configure and create the Redux store:
  - The store combines both slices ('counter' and 'text') as separate reducers.
  - The store is the centralized location where the state and its changes are managed.
*/
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // Registering the counter slice reducer
    text: textSlice.reducer, // Registering the text slice reducer
  },
});

/* 
  Redux Provider:
  - A wrapper component that provides the Redux store to the entire app.
  - This makes the store accessible to all components within the application.
*/
export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

// Export the configured store as the default export
export default store;

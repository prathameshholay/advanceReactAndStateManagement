// src/store/zustandStore.jsx

// Import the 'create' function from the Zustand library to create a global state
import { create } from 'zustand';

/*
  Zustand Store:
  - Zustand is a lightweight state management library that uses React hooks.
  - We create a store using the 'create' function which returns a custom hook.
  - The store manages a counter state with three main actions: increment, decrement, and reset.
  
  Store Structure:
  - 'value': Represents the current count, initialized to 0.
  - 'increment': A function that increases the count by 1.
  - 'decrement': A function that decreases the count by 1.
  - 'reset': A function that resets the count to 0.
*/
const useCounterStore = create((set) => ({
  // Initial state of the counter
  value: 0,

  // Increment action: Updates the state by increasing the value by 1
  increment: () => set((state) => ({ value: state.value + 1 })),

  // Decrement action: Updates the state by decreasing the value by 1
  decrement: () => set((state) => ({ value: state.value - 1 })),

  // Reset action: Sets the value back to 0
  reset: () => set({ value: 0 }),
}));

// Export the custom hook for usage in components
export default useCounterStore;

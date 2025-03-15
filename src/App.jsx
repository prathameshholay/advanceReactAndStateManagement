import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContext, { ThemeProvider } from './ThemeContext'
import { useNavigate } from 'react-router-dom';


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate();

  return (
    <>
      <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center',
        height: 'auto'
      }}>
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
        <button onClick={toggleTheme} style={{
          padding: '10px 20px',
          marginTop: '20px',
          backgroundColor: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#333',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Toggle Theme
        </button>
        <div style={{
          top: '20px',
          margin: '30px',
          fontFamily: 'monospace',
          fontSize: '17px',
          padding: '20px 60px',
          lineHeight: '1.8', // Increases line spacing
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <p>💡 1. Created a Context (ThemeContext.jsx)</p>
          <p>We created a Context to hold and manage our theme state.</p>
          <p><b>Key Points:</b></p>
          <ul style={{ marginLeft: '20px' }}>
            <li>Used <code>createContext()</code> to create the context.</li>
            <li>Maintained the theme state using <code>useState()</code>.</li>
            <li>Provided a <code>toggleTheme</code> function to switch between light and dark themes.</li>
            <li>Wrapped our app with <code>ThemeProvider</code> to make the theme accessible everywhere.</li>
          </ul>
          <p><b>Why We Did This:</b></p>
          <p>Using context allows us to share the theme state and toggle function across multiple components without prop drilling.</p>

          <p>⚛️ 2. Created the Root Component (App.jsx)</p>
          <p>Our App component used the context to:</p>
          <ul style={{ marginLeft: '20px' }}>
            <li>Get the current theme and toggle function using <code>useContext()</code>.</li>
            <li>Display the theme name.</li>
            <li>Implement a button to toggle the theme.</li>
          </ul>
          <p><b>Why We Did This:</b></p>
          <p>This is the main component where we actually use the context data. The button click toggles the theme and updates the entire UI.</p>

          <p>🚀 3. Connected Everything (main.jsx)</p>
          <p>The <code>main.jsx</code> is the entry point where we:</p>
          <ul style={{ marginLeft: '20px' }}>
            <li>Rendered the Root component (wrapped in <code>ThemeProvider</code>) to make the context available globally.</li>
            <li>Used <code>ReactDOM.createRoot()</code> to render the app.</li>
          </ul>
          <p><b>Why We Did This:</b></p>
          <p>The <code>ThemeProvider</code> needs to be at the top level so every child component can access the theme.</p>

          <p>📝 4. Styling and Toggle Logic</p>
          <p>We applied inline styles to change the background and text color dynamically based on the current theme.</p>


          <div>
            <h1>Conclusion</h1>
            🌟 Why Use Context API for Theme Management?
            Global Access: Makes the theme state accessible from anywhere.
            Efficient State Management: No need to pass props down multiple levels.
            Performance: Context API is efficient when used correctly, especially for low-frequency updates like theme toggling.
          </div>

          {/* Navigation Button */}
          <button onClick={() => navigate('/redux-zustand')} style={{
            marginTop: '30px',
            padding: '10px 20px',
            backgroundColor: theme === 'light' ? '#007bff' : '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Go to Redux & Zustand Setup
          </button>

        </div>
      </div>

    </>
  )
}


export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';

const App = () => (
  <AppLayout>
    <h1>About</h1>
    <p>Goals of this website is to demonstrate:</p>
    <ul>
      <li>Building a simple MPA (Multi Page Application)</li>
      <li>Using Vite</li>
      <li>Using React</li>
    </ul>
  </AppLayout>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

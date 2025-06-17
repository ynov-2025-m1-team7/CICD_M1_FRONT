import React from 'react';
import Routes from './config/routes';
import './App.css';
import SentryComponent from './config/sentry';

function App() {
  return (
    <div className="App">
      <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
      <Routes />
    </div>
  );
}

export default App;
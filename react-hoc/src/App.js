import React from 'react';
import './App.css';
import TestButton from './components/TestButton';
import TestButtonNext from './components/TestButtonNext';

function App() {
  return (
    <div className="App">
      <TestButton disable/>
      <br/>
      <TestButtonNext />
    </div>
  );
}

export default App;

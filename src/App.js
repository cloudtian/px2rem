import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-body">
        <p className="App-title">
          px2rem
        </p>
        <p className="App-description">
          a webpack loader which can transform lowercase "px" to "rem" format
           and would do nothing for "PX" in css style.
        </p>
      </main>
    </div>
  );
}

export default App;

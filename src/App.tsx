import React from 'react';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log("test")}>
        Hello world
      </Button>
    </div>
  );
}

export default App;

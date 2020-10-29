import React from 'react';
import './App.css';
import PuttingItTogether from './components/PuttingItTogether.js'

function App() {
  return (
    <div className="App">
      <PuttingItTogether lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PuttingItTogether lastName="Smith" firstName="John" age={88} hairColor="Brown" />
      {/* <h1><PuttingItTogether lastName = 'Doe,' firstName = 'Jane'/></h1>
      <p><PuttingItTogether age = 'Age: 45'/></p>
      <p><PuttingItTogether hairColor = 'Hair Color: Blond'/></p> */}
    </div>
  );
}

export default App;

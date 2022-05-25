import React from 'react';
import './App.css';
import Form from './Form';
import { Togglebutton } from './Togglebutton';
import { Welcome } from './Welcome';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="ritik  " age={34} />
        <Togglebutton />
        <Form />
      </header>
    </div>
  );
}

export default App;

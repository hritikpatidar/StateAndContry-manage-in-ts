import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContryApi from './component/contryApi/ContryApi';
import Form from './component/form/Form';
import { Togglebutton } from './component/togglebutton/Togglebutton';
import { Welcome } from './component/welcome/Welcome';

function App() {

  return (
    <div className='App-header'>
     
        <Welcome name="ritik  " age={34} />
        <Togglebutton />
        <Form /> 
        <ContryApi />
      
      
    </div>
  );
}

export default App;

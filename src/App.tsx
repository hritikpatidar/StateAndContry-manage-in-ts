import React from 'react';
import './App.css';
import ContryApi from './component/contryApi/ContryApi';
//import Form1 from './component/form/Form1';
// import Form from './component/form/Form';
// import { Togglebutton } from './component/togglebutton/Togglebutton';
// import { Welcome } from './component/welcome/Welcome';



function App() {

  return (
    <div className='App-header'>
     
        {/* <Welcome name="ritik  " age={34} />
        <Togglebutton />
        <Form /> 
        <Form1 /> */}
        <ContryApi />
     
    </div>
  );
}

export default App;

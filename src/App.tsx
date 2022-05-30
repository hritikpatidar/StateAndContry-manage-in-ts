import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';
import store from './Redux/store/Store';
// import ContryApi from './component/contryApi/ContryApi';
// import Form1 from './component/form/Form1';
//import Form1 from './component/form/Form1';
// import Form from './component/form/Form';
// import { Togglebutton } from './component/togglebutton/Togglebutton';
// import { Welcome } from './component/welcome/Welcome';

function App() {

  return (
    <div className='App-header'>
      <Provider store={store}>
        {/* <Welcome name="ritik  " age={34} />
        <Togglebutton />
        <Form /> 
        <Form1 /> 
        <ContryApi /> */}
        <BrowserRouter>
          <Routes>
            <Route path='form' element={<Form />} />
            <Route path="table" element={<Table />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

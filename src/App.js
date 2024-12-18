import React from 'react';
import Main from './components/pages/Main';
import Steps from './components/pages/Steps';
import Tariffs from './components/pages/Tariffs';
import About from './components/pages/About';
import Page404 from './components/pages/Page404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Main/>}>
            <Route path="/" element={<About/>} />
            <Route path='*' element={<Page404/>}/>
            <Route path="/steps" element={<Steps/>} /> 
            <Route path="/tariffs" element={<Tariffs/>} />
            
            </Route> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <h1>JOAQUIN ORTEGA</h1>
        <div className='body'>
          <Header />
          <div>

          <Outlet />
          </div>
          {/* <Footer /> */}
          {/* <p>hello world</p> */}
        </div>
    </div>
      

  );
}

export default App;


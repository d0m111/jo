import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <h1><Link to={`/`}>JOAQUIN ORTEGA</Link></h1>
        <div className='body'>
          <Header />
          

          <Outlet />
          
          {/* <Footer /> */}
          {/* <p>hello world</p> */}
        </div>
    </div>
      

  );
}

export default App;


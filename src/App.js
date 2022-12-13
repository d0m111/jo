import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <Footer /> */}
      {/* <p>hello world</p> */}
    </div>
      

  );
}

export default App;


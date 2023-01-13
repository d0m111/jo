import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <h1><Link to={`/`} className="link title-deco">JOAQUIN ORTEGA</Link></h1>
        {/* <div>
            <h1 ><Link to={`/`} className="link title-deco">JOAQUIN ORTEGA</Link></h1>
        </div> */}
        <div className='body'>
          <Header />
          

          <Outlet />
          
          
          {/* <p>hello world</p> */}
        </div>
    </div>
      

  );
}

export default App;


import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"


export default function Header() {
     return (
          <div>
               {/* <h1>JOAQUIN ORTEGA</h1> */}
               <nav>
                    <h2>MUSIC</h2>
                    <ul> 
                         <li><Link to={`/solo`}>Solo</Link></li>
                         <li><Link to={`/blast`}>BLAST</Link></li>
                         <li><Link to={`/laGrote`}>La Grote</Link></li>
                         {/* <li>La Grote</li> */}
                    </ul>
                    <h2>DANCE</h2>
                    <ul>
                         <li>qsdqsdqsd</li>
                         <li>qsdqsdqsd</li>
                    </ul>
                    <h2>OTHERS</h2>
                    <ul>
                         <li>qsdqsdq</li>
                         <li>lkjhgqsd</li>
                    </ul>
               </nav>
          </div>
     );
}

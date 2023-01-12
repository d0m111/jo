import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"


export default function Header() {
     return (
          <div>
               {/* <h1>JOAQUIN ORTEGA</h1> */}
               <nav>
                    <h2 className="header-titles">MUSIC</h2>
                    <ul> 
                         <li><Link to={`/solo`} className="link title-deco">Solo</Link></li>
                         <li><Link to={`/blast`} className="link title-deco">BLAST</Link></li>
                         <li><Link to={`/laGrotte`} className="link title-deco">La Grotte</Link></li>
                         {/* <li>La Grote</li> */}
                    </ul>
                    <h2 className="header-titles">DANCE</h2>
                    <ul>
                         <li><Link to={`/compagnieMimosa`} className="link title-deco">Compagnie Mimosa</Link></li>
                         {/* <li>qsdqsdqsd</li> */}
                    </ul>
                    <h2 className="header-titles">OTHERS</h2>
                    <ul>
                         <li><Link to={'/collectiveISRAW'} className="link title-deco">Corallo Sonoro</Link></li>
                    </ul>
                    <h2 className="header-titles">INFO</h2>
                    <ul>
                         <li><Link to={'/bio'} className="link title-deco">BIO</Link></li>
                    </ul>
                    
               </nav>
               <div className="socials">
               
               <i class="fa fa-car"></i>
               <i class="fa-brands fa-facebook"></i>
                        
               </div>
          </div>
     );
}

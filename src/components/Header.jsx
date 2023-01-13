import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Footer from '../components/Footer';


export default function Header() {
     return (
          <div className="header-container">
               <nav>
                    <h2 className="header-titles">MUSIC</h2>
                    <ul> 
                         <li><Link to={`/solo`} className="link title-deco">Solo</Link></li>
                         <li><Link to={`/blast`} className="link title-deco">BLAST</Link></li>
                         <li><Link to={`/laGrotte`} className="link title-deco">La Grotte</Link></li>
                    </ul>
                    <h2 className="header-titles">DANCE</h2>
                    <ul>
                         <li><Link to={`/latere`} className="link title-deco">Latere</Link></li>
                         {/* <li>qsdqsdqsd</li> */}
                    </ul>
                    <h2 className="header-titles">OTHERS</h2>
                    <ul>
                         <li><Link to={'/collectiveISRAW'} className="link title-deco">Corallo Sonoro</Link></li>
                    </ul>
                    <h2 className="header-titles">INFO</h2>
                    <ul>
                         <li><Link to={'/bio'} className="link title-deco">BIO</Link></li>
                         <li><Link to={'/events'} className="link title-deco">Events</Link></li>
                    </ul>
                    
               </nav>
               <Footer />
          </div>
     );
}

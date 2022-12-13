import React from "react";
import fotoPortada from "../assets/jo_portada.jpeg";

export default function Header() {
     return (
          <div>
               <h1>JOAQUIN ORTEGA</h1>
               <div className="photo-container">
                    <img
                         src={fotoPortada}
                         alt="Joaquin Ortega, guitar, portrait"
                    />
               </div>
          </div>
     );
}

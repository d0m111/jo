import React from "react";
import fotoPortada from "../assets/jo-gif-final.gif";

export default function Home(){
    return (
        
            <div className="photo-container">
                <img
                     src={fotoPortada}
                     alt="Joaquin Ortega, guitar, portrait"
                />
            </div>
        
    )
}
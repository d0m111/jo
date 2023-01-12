import React from "react";
import gifBio from '../assets/gif-portada.gif'


export default function Bio(){
    return(
        <div className="bio-wrapper">
            <img src={gifBio} alt="portrait of joaquin ortega" />
            <p>Joaquín Ortega creates cities, crashing cars and people that whisper in different languages. Depending on the temperature or the weather, he switches between delicate noisy sculptures and wide electronic atmospheres.
                He has developed techniques on the guitar inspired by movement, contemporary musical languages, and field recording techniques.
                He studied guitar and improvisation at the National University of Rosario in Argentina and at the Institut Supérieur des Arts de Toulouse (ISDAT) in France. He has toured several times in Europe and is currently artist in residence at the Cité internationale des arts in Paris.
            </p> 
        </div>
            
    )
}
import React from "react";
import BioPic from '../assets/Bio-jo.jpeg'


export default function Bio(){
    return(
        <div className="bio-wrapper">
            <img src={BioPic} alt="portrait of joaquin ortega" />
            <p>Joaquín Ortega creates cities, crashing cars and people that whisper in different languages. Depending on the temperature or the weather, he switches between delicate noisy sculptures and wide electronic atmospheres.
                He has developed techniques on the guitar inspired by movement, contemporary musical languages, and field recording techniques.
                He studied guitar and improvisation at the National University of Rosario in Argentina and at the Institut Supérieur des Arts de Toulouse (ISDAT) in France. He has toured several times in Europe and is currently artist in residence at Cité internationale des arts in Paris.
            </p> 
        </div>
            
    )
}
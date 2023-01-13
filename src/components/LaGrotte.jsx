import React from "react";
import "../App.css"
import laGrottePhoto from "../assets/laGrotte.jpg"
import "../styles/solo.css"

export default function LaGrotte(){
    return(
        <article>
            <div className="component-title-wrapper">
                <h3>La Grotte</h3>
                <p>Rémy Gouffault: drums/electronics</p>
                <p>Joaquin Ortega: guitar/electronics</p>
            </div>
            <div className="solo-content-wrapper">
                <p>La Grotte reveals a deep research on textures and space in sound.
                    The duo mixes acoustic and electronic timbres, between electric
                    guitar, electronic devices, drums, objects and synthesizers.
                    In March 2022, La Grotte released its first EP of five original tracks
                    that illustrates an imaginary speleological journey, revealing the
                    deep and inner aspect of this music and they have performed in
                    Berlin, Leipzig, Paris and Toulouse among others.
                </p>
                <iframe className="bandCamp-iframe" title="band camp player" src="https://bandcamp.com/EmbeddedPlayer/album=4153160252/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://joaquinortega.bandcamp.com/album/la-grotte">La grotte by La Grotte</a></iframe>
                {/* <img src="https://f4.bcbits.com/img/a3552457219_16.jpg" alt="coverFront of the album Le Grandes Maisons by Joaquin Ortega"></img> */}
                
                <div className="iframe-wrapper">
                    <img src={laGrottePhoto} alt="la grotte duo press"/>
                </div>
                
            </div>

        </article>
    )
}
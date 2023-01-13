// import { url } from "inspector";
import React from "react";
import "../styles/solo.css"

export default function Solo(){
    // const coverFront = url('https://f4.bcbits.com/img/a3552457219_16.jpg');

    return (
        <article>
            <div className="solo-title-wrapper">
                <h3>Les grandes maisons</h3>
                <p>guitar / electronics</p>
            </div>
            <div className="solo-content-wrapper">
                <p>The solo invites us to immerse ourselves in a deep listening, constantly nourishing the search for an interaction of sound objects in space.
                Tremors, resonances or vibrations create a world in perpetual mutation, in a game of discontinuity/continuity. </p>
                <iframe className="bandCamp-iframe" title="player bandcamp joaquin" src="https://bandcamp.com/EmbeddedPlayer/album=2720788301/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://joaquinortega.bandcamp.com/album/les-grandes-maisons">Les grandes maisons by Joaquin Ortega</a></iframe>
                {/* <img src="https://f4.bcbits.com/img/a3552457219_16.jpg" alt="coverFront of the album Le Grandes Maisons by Joaquin Ortega"></img> */}
                
                <div className="iframe-wrapper">
                    <iframe className="solo-yt-iframe" src="https://www.youtube.com/embed/gooL4YT5luI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* <iframe className="bandCamp-iframe" title="band camp player" src="https://bandcamp.com/EmbeddedPlayer/album=2720788301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://joaquinortega.bandcamp.com/album/les-grandes-maisons">Les grandes maisons by Joaquin Ortega</a></iframe> */}
                </div>
                
            </div>
        </article>
        
    )
}
import React from "react";
import "../styles/solo.css";

export default function Blast(){
    return (
        <article>
            <div className="component-title-wrapper">
                <h3>BLAST</h3>
                <p>Francisco Uberto: drums/electronics</p>
                <p>Joaquin Ortega: guitar/electronics</p>
            </div>

            <div className="solo-content-wrapper">
            <p>We just play, spontaneously, with no prior talking, plans, and all that crap.</p>
                <div className="iframe-wrapper">
                    <iframe className="solo-yt-iframe" src="https://www.youtube.com/embed/pWni0wybGSw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  className="bandCamp-iframe" title="band camp player" src="https://bandcamp.com/EmbeddedPlayer/album=1371569582/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://joaquinortega.bandcamp.com/album/post-post-post-era">post-post-post-era by Francisco Uberto, Joaquin Ortega</a></iframe>
                    {/* <iframe  src="https://bandcamp.com/EmbeddedPlayer/album=2720788301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://joaquinortega.bandcamp.com/album/les-grandes-maisons">Les grandes maisons by Joaquin Ortega</a></iframe> */}
                </div>
            </div>
        </article>
    )
}
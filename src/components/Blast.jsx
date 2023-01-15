import React from "react";
import "../styles/solo.css";

export default function Blast(){
    return (
        <article>
            <div className="component-title-wrapper">
                <h3>BLAST</h3>
                <p>Francisco Uberto: electronics</p>
                <p>Joaquin Ortega: guitar/electronics</p>
            </div>

            <div className="solo-content-wrapper">
                <p>The duo guides us towards dizzying, even purely visceral sound territories where everything can collapse at any moment, as if it could be stretched out on great hypnotic atmospheres.
                The forms of the different pieces performed are mutable, in order to give an important place to long sound progressions which are close to drone music, but also to give free course to improvisation during intense and short passages, where noise and free improvised music seems to be the main influence.
                </p>
            <iframe className="bandCamp-iframe" title="band camp player"  src="https://bandcamp.com/EmbeddedPlayer/album=1371569582/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://joaquinortega.bandcamp.com/album/post-post-post-era">post-post-post-era by Francisco Uberto, Joaquin Ortega</a></iframe>
                <div className="iframe-wrapper">
                    <iframe className="solo-yt-iframe" src="https://www.youtube.com/embed/pWni0wybGSw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </article>
    )
}
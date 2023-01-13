import React from "react";
// import photoLatere from "../assets/LatereDanza.png"
import sponsorI from "../assets/Latere_dansa_sponsors_1.png"
import sponsorII from "../assets/Latere_Dansa_sponsors_2.png"

export default function Mimosa(){
    return(
        <article>
            <div className="component-title-wrapper">
                <h3>Latere</h3>
                <p>Compagnie Mimosa</p>
                <p>Choreographer: Elvira Madrigal</p>
            </div>
            <div className="mimosa-content-wrapper">
                <p>Latency is the quality of being present but hidden. It is the span of time between a stimulus from a response. It comes from the Latin latere which means hidden.
                But what happens when we feel, palpate the heartbeat? The heartbeat ceases to be hidden, that is, at the moment we perceive its manifestation, the heartbeat ceases to be latent and becomes present or perhaps enters into another state of latency. We can say that the border between the present
                and the hidden, the state of latency, is very fragile and may depend on perspectives and sensitivities.
                </p>
                <iframe title="vimeo player teaser latere project" src="https://player.vimeo.com/video/782998925?h=b486415619" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <div className="latere-footer">
                    <div className="footer-photo-container">
                        <img id="sponsorI" src={sponsorI} alt="portrait of latere" />
                    </div>
                    <div className="footer-photo-container">
                        <img id="sponsorII" src={sponsorII} alt="portrait of latere" />
                    </div>
                </div>
            </div>
        </article>
    )
}
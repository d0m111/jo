import React from "react";
import bandCampLogo from "../assets/bandcampLogo.png"
import igLogo from "../assets/IG-logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, brands } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />
// const bandCampLogo = <FontAwesomeIcon icon={brands} />

export default function Footer(){
    return(
        <div className="footer-container">
            {/* <span>{element}</span> */}
            <div className="foo-logo-container">
                <a href="https://joaquinortega.bandcamp.com/" className="link"><img className="logo-resized" src={bandCampLogo} alt="bandcamp of Joaquin Ortega"/></a>
                <a href="https://www.instagram.com/joaquinalvor/" className="link"><img className="logo-resized" src={igLogo} alt="instagram of Joaquin Ortega"/></a>
            </div>
            {/* <span>{bandCampLogo}</span> */}
            <a href="mailto:joaquin.er.ortega@gmail.com" className="link">joaquin.er.ortega@gmail.com</a>
        </div>
    )
}
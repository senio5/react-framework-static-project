import React from "react"
import logo from "../images/logo.png"
/*"export default" if its the only component so it can be used in the main file of the project this allows you to be able to use the component in the App*/

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <img className="nav-icon"
            src={logo}
            alt=""/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            
            <div className="toggler">
                <p className="toggler-light">Light</p>
                
                <div
                className="toggler-slider"
                onClick={props.toggleDarkMode}>
                    <div className="toggler-slider-circle"></div>
                </div>
                
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}
/*by having the toggle slider circle <div> inside the toggle slider <div>
 it places it inside of the slider on the webpage */
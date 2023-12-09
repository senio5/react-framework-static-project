//components only need import React from "react"
import React from "react"
import logo from "../images/logo.png"
/*"export default" if its the only component so it can be used in the main file of the project this allows you to be able to use the component in the App*/

export default function Navbar(){
    return(
        <nav>
            <img className="nav-icon" src={logo} alt="N/A"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}
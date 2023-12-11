//need to import the components and React from "react"
import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


//create export so it can be imported into index.js
export default function App(){
    const [darkMode, setDarkMode] = React.useState(true)

    //a function that uses "state" to help toggle back and forth between dark mode 
    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }
    return(
        //need a div container to contain both components can only return one element in React
        //we had to pass the function to the navbar because that is where our toggle button will be
        <div className="container">
            <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode} />
            <Main
            darkMode={darkMode} />
        </div>
    )
}
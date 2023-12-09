//need to import the components and React from "react"
import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


//create export so it can be imported into index.js
export default function App(){
    return(
        //need a div container to contain both components can only return one element in React
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}
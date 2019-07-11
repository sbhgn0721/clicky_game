import React from "react";
import "./NavTabs.css"

function NavTabs (props) {
   
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
               
                <ul>
                    
                    <li className="nav-item" id="game-name"><h2> Clicky Game</h2></li>
                  

                  
                    <li className="nav-item" id="result"><h2>{props.guessedResult}</h2></li>
               

     
                    <li className="nav-item" id="score"><h2>Score: {props.currentScore} | Top Score: {props.topScore} </h2></li>
              
                </ul>
             
            </nav>
        )
    
}

export default NavTabs;
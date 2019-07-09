import React, { Component } from "react";
import "./NavTabs.css"

class NavTabs extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
               
                <ul>
                    
                    <li className="nav-item" id="game-name"><h2> Clicky Game</h2></li>
                  

                  
                    <li className="nav-item" id="result"><h2>You guessed correctly!</h2></li>
               

     
                    <li className="nav-item" id="score"><h2>Score:  | Top Score: </h2></li>
              
                </ul>
             
            </nav>
        )
    }
}

export default NavTabs;
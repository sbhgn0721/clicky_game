import React from "react";
import "./FriendCard.css"

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.image} />

            </div>
        </div>
    )
}

export default FriendCard;
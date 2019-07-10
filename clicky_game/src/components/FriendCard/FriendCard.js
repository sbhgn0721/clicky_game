import React from "react";
import "./FriendCard.css"

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={ require("../../images/" + props.image) } alt={props.image.replace(".jpg", "")} />

            </div>
        </div>
    )
}

export default FriendCard;
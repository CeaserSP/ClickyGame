import React from "react";
import "./Score.css";

const Score = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score:{props.score} Top score: {props.topscore}
        </div>
    </div>
)

export default Score;
import React from "react";
import "./Tile.css";

function Tile(props) {
    const {title, salary, equity} = props.job;

    return(
        <div className="info-tile">
            <h3>{title}</h3>
            <p>{`Salary: $${Number(salary).toLocaleString()}`}</p>
        </div>
    )
}

export default Tile;
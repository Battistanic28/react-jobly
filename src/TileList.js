import React from "react";
import Tile from "./Tile.js";
import "./styles/TileList.css";


function TileList(props) {
    const {values, title} = props;
    
    
    return(
        <div className="tile-container">
            {values.map(value => (
                <Tile value={value} title={title}></Tile>
            ))}
        </div>
    )

}

export default TileList;
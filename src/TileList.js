import React from "react";
import Tile from "./Tile.js";
import "./TileList.css";
// import { Link, useLocation, useParams } from "react-router-dom";
// import queryString from "query-string";


function TileList(props) {
    const {jobs} = props;
    console.log(jobs)
    
    
    return(
        <div className="tile-container">
            {jobs.map(job => (
                <Tile job={job}></Tile>
            ))}
        </div>
    )

}

export default TileList;
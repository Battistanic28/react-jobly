import { React, useState } from "react";
import "./styles/Tile.css";

function Tile(props) {

    const [Apply, setApply] = useState("Apply")

    function toggle() {
        return (Apply === "Apply" ? setApply("Applied!") : setApply("Apply"))
    }

    const category = props.title;
    
    if(category === "jobs") {
        const {title, salary} = props.value;
        return(
            <div className="info-tile">
                <h3>{title}</h3>
                <p>{`Salary: $${Number(salary).toLocaleString()}`}</p>
                <button onClick={toggle}>{Apply}</button>
            </div>
        )
    } else {
        const {name, description} = props.value
        return(
            <div className="info-tile">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        )
    }
}

export default Tile;
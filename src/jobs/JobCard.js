import { React, useState } from "react";
import "../styles/Card.css";

function JobCard(props) {

    const [Apply, setApply] = useState("Apply")

    function toggle() {
        return (Apply === "Apply" ? setApply("Applied!") : setApply("Apply"))
    }
    
        const {title, salary} = props.value;
        return(
            <div className="info-tile">
                <h3>{title}</h3>
                <p>{`Salary: $${Number(salary).toLocaleString()}`}</p>
                <button onClick={toggle}>{Apply}</button>
            </div>
        )
}

export default JobCard;
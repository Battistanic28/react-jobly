import { React, useState } from "react";
import JoblyApi from "../API/api";
import jwt from "jsonwebtoken";
import "../styles/Card.css";

function JobCard(props) {

    const token = localStorage.getItem('token');
    const {username} = jwt.decode(token);

    const [Apply, setApply] = useState("Apply")

    function toggle() {
        return (Apply === "Apply" ? setApply("Applied!") : setApply("Apply"))
    }

    async function apply(e) {
        const jobId = e.target.id;
        await JoblyApi.apply(username, jobId)
        toggle();
    }


    
        const {id, title, salary} = props.value;
        return(
            <div className="info-tile">
                <h3>{title}</h3>
                <p>{`Salary: $${Number(salary).toLocaleString()}`}</p>
                <button id={id} onClick={apply}>{Apply}</button>
            </div>
        )
}

export default JobCard;
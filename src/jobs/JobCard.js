import { React, useState } from "react";
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import { Redirect } from "react-router";
import JoblyApi from "../API/api";
import jwt from "jsonwebtoken";
import "../styles/Card.css";

function JobCard(props) {

    const token = localStorage.getItem('token');

    const [Apply, setApply] = useState("Apply")

    function toggle() {
        return (Apply === "Apply" ? setApply("Applied!") : setApply("Apply"))
    }

    async function apply(e) {
        if (token) {
            const {username} = jwt.decode(token);
            const jobId = e.target.id;
            await JoblyApi.apply(username, jobId)
            toggle();
        } else {
            alert("Please log in first.")
        }

    }


    
        const {id, title, salary} = props.value;
        
        return(
            <Card className="info-tile">
                <CardTitle tag="h4">{title}</CardTitle>
                <CardBody>{`Salary: $${Number(salary).toLocaleString()}`}</CardBody>
                <Button outline color="primary" id={id} onClick={apply}>{Apply}</Button>
            </Card>
        )
}

export default JobCard;
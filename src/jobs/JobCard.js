import { React, useState } from "react";
import { Card, CardImg, Button, CardBody, CardTitle } from 'reactstrap';
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
            <Card className="info-tile">
                <CardTitle tag="h4">{title}</CardTitle>
                <CardBody>{`Salary: $${Number(salary).toLocaleString()}`}</CardBody>
                <Button outline color="secondary" id={id} onClick={apply}>{Apply}</Button>
            </Card>
        )
}

export default JobCard;
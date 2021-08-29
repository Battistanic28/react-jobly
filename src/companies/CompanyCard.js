import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";
import "../styles/Card.css";

function CompanyCard(props) {

    const {title} = props;
    const {name, handle, description} = props.value;


    return(
        <Card className="info-tile">
                <Link to={`/${title}/${handle}`}>
                <CardTitle tag="h4">{name}</CardTitle>
                <CardBody className="card-body">{description}</CardBody>
                </Link>
            </Card>
    )
}

export default CompanyCard;
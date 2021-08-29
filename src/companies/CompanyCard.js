import React from "react";
import { Card, CardImg, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from "react-router-dom";
import "../styles/Card.css";

function CompanyCard(props) {

    const {title} = props;
    const {name, handle, description} = props.value;


    return(
        <Link to={`/${title}/${handle}`}>
            <Card className="info-tile">
                {/* <CardImg>{image}</CardImg> */}
                <CardTitle tag="h4">{name}</CardTitle>
                <CardBody className="card-body">{description}</CardBody>
            </Card>
        </Link>
    )
}

export default CompanyCard;
import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Card.css";

function CompanyCard(props) {

    const {title} = props;
    const {name, handle, description} = props.value;

    return(
        <Link to={`/${title}/${handle}`}>
        <div className="info-tile" id={handle}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        </Link>
    )
}

export default CompanyCard;
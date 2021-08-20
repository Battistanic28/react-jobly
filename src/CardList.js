import React from "react";
import JobCard from "./JobCard.js";
import CompanyCard from "./CompanyCard.js";
import "./styles/CardList.css";


function CardList(props) {
    const {values, title} = props;
    
    if(title === "jobs") {
        return(
            <div className="tile-container">
                {values.map(value => (
                    <JobCard value={value} title={title}></JobCard>
                ))}
            </div>
        )
    } else {
        return(
            <div className="tile-container">
                {values.map(value => (
                    <CompanyCard value={value} title={title}></CompanyCard>
                ))}
            </div>
        )
    }


}

export default CardList;
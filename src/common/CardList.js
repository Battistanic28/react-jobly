import React from "react";
import Search from "./Search.js"
import JobCard from "../jobs/JobCard.js";
import CompanyCard from "../companies/CompanyCard.js";
import JoblyApi from "../API/api.js";
import "../styles/CardList.css";


function CardList(props) {
    const {values, title} = props;

    
    if(title === "jobs") {
        return(
            <div className="tile-container">
                {values.map(value => (
                    <JobCard key={value.id} value={value} title={title}></JobCard>
                ))}
            </div>
        )
    } else {
        return(
            <div className="tile-container">
                <Search></Search>
                {values.map(value => (
                    <CompanyCard key={value.handle} value={value} title={title}></CompanyCard>
                ))}
            </div>
        )
    }


}

export default CardList;
import { React, useState, useEffect } from "react";
import Search from "../common/Search.js"
import CompanyCard from "../companies/CompanyCard.js";
import JoblyApi from "../API/api.js";
import "../styles/CardList.css";


function CompanyList() {

    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState();
  
    useEffect(() => {
      async function getCompanies() {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
        setIsLoading(false);
      }
      getCompanies();
    },[]); 
  
    async function search(query) {
        setIsLoading(true)
        let results = await JoblyApi.getCompanies(query)
        setCompanies(results);
        setIsLoading(false)
  }
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    if(companies) {
        return(
            <div className="tile-container">
                <Search searchFor={search}></Search>
                {companies.map(company => (
                    <CompanyCard key={company.handle} value={company} title="companies"></CompanyCard>
                ))}
            </div>
        )
    } else {
        return(
            <>
            <Search searchFor={search}></Search>
            <p>Sorry...no results found</p>
            </>
        )
    }

}

export default CompanyList;
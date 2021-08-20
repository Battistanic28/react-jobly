import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import JobCard from "../jobs/JobCard.js";
import JoblyApi from '../API/api.js';

function CompanyDetail() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const {handle} = useParams();

    
    useEffect(() => {
        async function getCompanyData() {
          let response = await JoblyApi.getCompany(handle);
          setData(response);
          setIsLoading(false);
        }
      getCompanyData();
    },[handle]);

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    return(
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>Number of employees: {data.numEmployees}</p>

            {data.jobs.map(job => (
                    <JobCard key={job.id} value={job} title={job}></JobCard>
                ))}
        </div>
    )

}

export default CompanyDetail;
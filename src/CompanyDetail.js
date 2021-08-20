import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from './api.js';

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
    },[]);

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    return(
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>Number of employees: {data.numEmployees}</p>
        </div>
    )

}

export default CompanyDetail;
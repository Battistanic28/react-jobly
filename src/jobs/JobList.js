import { React, useState, useEffect } from "react";
import JobCard from "../jobs/JobCard.js";
import JoblyApi from "../API/api.js";


function JobList() {

    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState();
  
    useEffect(() => {
      async function getJobs() {
        let jobs = await JoblyApi.getJobs();
        setJobs(jobs);
        setIsLoading(false);
      }
      getJobs();
    },[]);
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    return(
        <div className="tile-container">
            {jobs.map(job => (
                <JobCard key={job.id} value={job} title="jobs"></JobCard>
            ))}
        </div>
    )

}

export default JobList;
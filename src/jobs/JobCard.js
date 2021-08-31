import { React, useState, useContext, useEffect } from "react";
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import JoblyApi from "../API/api";
import UserContext from "../auth/UserContext";


function JobCard(props) {

    const {token, user, applications, setApplications, userData} = useContext(UserContext);
    const [appStatus, setAppStatus] = useState();
    const {id, title, salary} = props.value;    

    function hasApplied(id) {
        console.log(applications)
        return applications.includes(id)
    }

    useEffect(function updateApplicationStatus() {
        setAppStatus(hasApplied(id));
    }, [id, hasApplied]);
    
    async function apply(e) {
        if (hasApplied(id)) return;
            const jobId = e.target.id;
            await JoblyApi.apply(user, jobId)
            setApplications([...applications, jobId])
            setAppStatus(true);
    }
    
    
    return(
        <Card className="info-tile">
            <CardTitle tag="h4">{title}</CardTitle>
            <CardBody>{`Salary: $${Number(salary).toLocaleString()}`}</CardBody>
            {token &&                
                <Button 
                    className="apply-btn" 
                    outline color="primary" 
                    id={id} 
                    onClick={apply}
                    disabled={appStatus}>
                    {appStatus ? "Applied!" : "Apply"}
                </Button>
                }
        </Card>
    )
}

export default JobCard;
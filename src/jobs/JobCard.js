import { React, useState, useContext, useEffect } from "react";
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import JoblyApi from "../API/api";
import UserContext from "../auth/UserContext";


function JobCard(props) {

    const {token, user, userData, setUserData} = useContext(UserContext);
    const [applied, setApplied] = useState();
    const {id, title, salary, equity} = props.value;   

    function hasApplied(id) {
        return userData.applications.includes(id);
    }

    useEffect(function updateApplicationStatus() {
        setApplied(hasApplied(id));
    }, [id, hasApplied]);
    
    async function apply(e) {
        const jobId = e.target.id;
        await JoblyApi.apply(user, jobId);
        const updateData = await JoblyApi.fetchUserData(user);
        setUserData(updateData.user);
    }
    
    
    return(
        <Card className="info-tile">
            <CardTitle tag="h4">{title}</CardTitle>
            <CardBody>{`Salary: $${Number(salary).toLocaleString()} | Equity: ${equity === null ? 0 : equity}%`}</CardBody>

            {token &&                
                <Button 
                    className="apply-btn" 
                    outline color="primary" 
                    id={id} 
                    onClick={apply}
                    disabled={applied}>
                    {applied ? "Applied!" : "Apply"}
                </Button>
                }
        </Card>
    )
}

export default JobCard;
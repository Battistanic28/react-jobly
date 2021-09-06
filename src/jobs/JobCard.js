import { React, useState, useContext, useEffect } from "react";
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import JoblyApi from "../API/api";
import UserContext from "../auth/UserContext";


function JobCard(props) {

    // Defaulting to localStorage for persistant user data - Need to refactor to rely on useContext
    const {userData, setUserData} = useContext(UserContext);
    const token = localStorage.getItem('token');


    const [applied, setApplied] = useState();
    const {id, title, salary, equity} = props.value;   

    function hasApplied(id) {
        return userData.applications.includes(id);
    }

    useEffect(function updateApplicationStatus() {
        setApplied(hasApplied(id));
    }, [id, hasApplied]);
    
    async function apply(e) {
        const {username} = JSON.parse(localStorage.getItem('userData'));
        const jobId = e.target.id;
        await JoblyApi.apply(username, jobId);
        const updateData = await JoblyApi.fetchUserData(username);

        // Defaulting to localStorage for persistant user data - Need to refactor to rely on useContext
        localStorage.setItem('userData', JSON.stringify(updateData.user));
        const userLocalStoarage = JSON.parse(localStorage.getItem('userData'));
        setUserData(userLocalStoarage);
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
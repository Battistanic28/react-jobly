import { React, useState, useEffect } from "react";
import EditProfile from './EditProfile.js';
import JoblyApi from '../API/api.js';


function Profile({user, token}) {

    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();
    
    useEffect(() => {
        async function getUserData() {
          let response = await JoblyApi.fetchUserData(user);
          setUserData(response.user);
          setIsLoading(false);
        }
        getUserData();
    },[user]);

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    } 

    return(
        <EditProfile userData={userData} />
    )
}

export default Profile;
import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import JoblyApi from "../API/api.js";


function EditProfile({userData}) {

    const initialState = {
        password: "",
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
    }

    const [formData, setFormData] = useState(initialState);
    const {password, firstName, lastName, email} = formData;
    const history = useHistory();


        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(data => ({
                ...data,
                [name]: value
            }
            ))
        }

        async function handleSubmit(e) {
            e.preventDefault();
            let res = await JoblyApi.updateUser(userData.username, formData);
            console.log(res)
            if (res.user) {
                alert("Profile updated!")
                history.push(`/profile/${formData.userName}`);
                setFormData(initialState);
            } else {
                alert(`Error: ${res}`)
            }
        }


        return(
            <div>
                <h1>Edit Profile</h1>
                <form>
                    <label htmlFor="fname">First Name:</label>
                    <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="lname">Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}>
                    </input>
                    <button onClick={handleSubmit}>Go!</button>
                </form>
            </div>
        )
    };

export default EditProfile;
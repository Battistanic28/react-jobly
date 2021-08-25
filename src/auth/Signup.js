import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import JoblyApi from "../API/api.js";


function Signup({setToken, setUser}) {

const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
}

const [formData, setFormData] = useState(initialState);
const {username, password, firstName, lastName, email} = formData;
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
        // console.log(formData)
        let res = await JoblyApi.registerUser(formData);
        console.log(res)
        if (res.token) {
            alert("success!")
            history.push('/companies');
            setFormData(initialState);
            setUser(formData.username);
            setToken(res.token)
        } else {
            alert(`Error: ${res}`)
        }
    }


    return(
        <div>
            <h1>Signup</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}>
                </input>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}>
                </input>
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
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}>
                </input>
                <button onClick={handleSubmit}>Go!</button>
            </form>
            <p>Already have an account?</p>
            <Link to={`/login`}>
            <button>Login!</button>
            </Link>
        </div>
    )
};

export default Signup;
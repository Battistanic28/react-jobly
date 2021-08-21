import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import JoblyApi from "../API/api.js";


function Login() {

    const initialState = {
        username: "",
        password: ""
    }
    
    const [formData, setFormData] = useState(initialState);
    const {username, password} = formData;
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
            let res = await JoblyApi.loginUser(formData);
            console.log(res)
            if (res.token) {
                alert("success!")
                history.push('/companies');
                setFormData(initialState);
            } else {
                alert(`Error: ${res}`)
            }
        }

    return(
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="Username">Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}>
                    </input>
                <label htmlFor="Password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}>
                </input>
                <button onClick={handleSubmit}>Go!</button>
            </form>
            <p>Don't have an account?</p>
            <Link to={`/signup`}>
            <button>Sign up!</button>
            </Link>
        </div>
    )
};

export default Login;
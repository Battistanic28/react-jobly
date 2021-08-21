import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="Username">Username:</label>
                <input type="text"></input>
                <label htmlFor="Password">Password:</label>
                <input type="text"></input>
                {/* <input name="name" value={name} onChange={handleChange} /> */}
                <Link to={`/`}>
                <button>Go!</button>
                </Link>
            </form>
            <p>Don't have an account?</p>
            <Link to={`/signup`}>
            <button>Sign up!</button>
            </Link>
        </div>
    )
};

export default Login;
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
        </div>
    )
};

export default Login;
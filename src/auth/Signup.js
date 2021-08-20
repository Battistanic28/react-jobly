import React from "react";
import { Link } from "react-router-dom";


function Signup() {
    return(
        <div>
            <h1>Signup</h1>
            <form>
                <label htmlFor="Username">Username:</label>
                <input type="text"></input>
                <label htmlFor="Password">Password:</label>
                <input type="text"></input>
                <label htmlFor="Firstname">First Name:</label>
                <input type="text"></input>
                <label htmlFor="Lastname">Last Name:</label>
                <input type="text"></input>
                <label htmlFor="email">Email:</label>
                <input type="text"></input>
                <Link to={`/`}>
                <button>Go!</button>
                </Link>
            </form>
        </div>
    )
};

export default Signup;
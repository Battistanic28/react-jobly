import { React } from "react";
import { Link } from "react-router-dom";


function Homepage() {
    return(
        <div>
            <h1>Welcome to Jobly</h1>
            <p>All the jobs and companies in one place</p>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/signup">
                <button>Sign up</button>
            </Link>

        </div>
    )
}

export default Homepage;
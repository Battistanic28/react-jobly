import { React } from "react";
import { Button, Jumbotron } from 'reactstrap';
import "../styles/Homepage.css"


function Homepage() {
    return(
        <div>
        <Jumbotron className="welcome">
          <h1 className="display-3">Welcome to Jobly!</h1>
          <p className="lead">All the jobs and companies in one, convenient place</p>
          <p className="lead">
            <Button className="btn" href="/login" color="primary">Login</Button>
            <Button className="btn" href="/signup" color="primary">Sign up</Button>
          </p>
        </Jumbotron>
      </div>
    )
}

export default Homepage;
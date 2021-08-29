import { React } from "react";
import { Button, Jumbotron } from 'reactstrap';
import Testimonial from "./Carousel.js"
import "../styles/Homepage.css"


function Homepage() {
    return(
        <div>
        <Jumbotron className="welcome">
          <h1 className="display-3">Welcome to Jobly!</h1>
          <p className="lead">All the jobs and companies in one, convenient place</p>
          <p className="lead">
            <Button className="btn" href="/login" outline color="primary">Login</Button>
            <Button className="btn" href="/signup" outline color="primary">Sign up</Button>
          </p>
        </Jumbotron>
        <Testimonial></Testimonial>
      </div>
    )
}

export default Homepage;
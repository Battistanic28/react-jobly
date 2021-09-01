import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import jwt from "jsonwebtoken";
import "../styles/NavBar.css";
import UserContext from "../auth/UserContext";



function NavBar({setToken}) {

  const {token} = useContext(UserContext);
  
  function logout() {
    setToken(localStorage.clear());
    alert("You have been logged out.")
  }
  
  if(token) {

    const {username} = jwt.decode(token);
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Jobly
          </NavLink>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to={`/profile/${username}`}>{username}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink token={token} to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact onClick={logout} to="/">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );

  } else {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Jobly
          </NavLink>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup">Signup</NavLink>
              </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
  }
  
  export default NavBar;
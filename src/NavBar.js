import React from "react";
import "./styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { NavbarBrand, Navbar, Nav, NavItem, Alert } from "reactstrap";
import "./styles/NavBar.css"
import jwt from "jsonwebtoken";


function NavBar({setToken}) {

  const token = localStorage.getItem('token');
  
  function logout() {
    setToken(localStorage.clear());
    alert("You have been logged out.")
  }
  
  if(token) {

    const {username} = jwt.decode(token);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Jobly</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to={`/profile/${username}`}>{username}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logout} to="/">Logout</NavLink>
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
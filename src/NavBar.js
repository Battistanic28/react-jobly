import React from "react";
import "./styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({user}) {

  function logout() {
    localStorage.clear();
    alert("You have been logged out.")
  }

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
              <NavLink to={`/profile/${user}`}>Profile</NavLink>
            </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup">Signup</NavLink>
              </NavItem>
            <NavItem>
              <NavLink onClick={logout} to="/login">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;
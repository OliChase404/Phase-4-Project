import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaBullhorn, FaChartLine, FaBell, FaDollarSign } from 'react-icons/fa';
import globe from '../assets/globe.gif';
import { Button } from "semantic-ui-react";

function NavBar({ setUser }) {


    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

  return (
    <Navbar style={{background: "purple"}} variant="dark" expand="lg" sticky="top">
      <img src={globe} style={{width: '50px', height: '50px'}}/>
      <Navbar.Brand style={{paddingLeft: "20px"}}>
          Sphere
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            <FaUser /> Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile">
            <FaUser /> Profile
          </Nav.Link>
          <Nav.Link as={NavLink} to="/messages">
            <FaEnvelope /> Messages
          </Nav.Link>
          <Nav.Link as={NavLink} to="/campaigns">
            <FaBullhorn /> Campaigns
          </Nav.Link>
          <Nav.Link as={NavLink} to="/performance">
            <FaChartLine /> Performance
          </Nav.Link>
          <NavDropdown title={<><FaBell /> Notifications</>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#notification"><FaBell /> Notification</NavDropdown.Item>
            <NavDropdown.Item href="#finances"><FaDollarSign /> Finances</NavDropdown.Item>
          </NavDropdown>
          <Nav>
          <Button className="LogoutButton" color="purple" inverted fluid  onClick={() => handleLogoutClick()}>Logout</Button>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

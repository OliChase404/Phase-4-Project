import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { FaUser, FaEnvelope, FaBullhorn, FaChartLine, FaBell, FaDollarSign } from 'react-icons/fa';

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Brand logo"
        />
       Sphere
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;


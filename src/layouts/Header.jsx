import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-center">
        <span className="h2 fw-bold me-1 ">MOCHI Mochi</span>
{/*         <small class="text-muted">Mochi</small> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav"  onClick={() => setExpanded(!expanded)}/>
{/* Expanded is set false when any link is clicked & true only when navbar toggle icon is clicked.  */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={closeNavbar}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" onClick={closeNavbar}>Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={closeNavbar}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;

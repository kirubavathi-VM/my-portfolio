import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" fixed='top'>
      <Container fluid>
        <Navbar.Brand>Kiruba's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"><i className="fa-solid fa-bars text-white"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ml-auto'>
            {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section)=>(
              <Nav.Link key={section} href={`#${section}`}>
                {section.toUpperCase()}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar

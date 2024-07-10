import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Logo from "../images/SFU_block_logo.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import "./Navigation.css";

function MyNavbar() {
  return (
    <div className="navbar-container">
    <Navbar className="navbar navbar-expand-lg m-0 shadow" style={{backgroundColor: '#B4B4B8', color: '	#3b3b3b'}}> 
      <Container fluid className="p-0" style={{backgroundColor: '#B4B4B8', fontSize: "18px"}}>
        <Navbar.Brand as={Link} to="/" style={{ color: '#3b3b3b', display: 'flex', alignItems: 'center'}}>
        
          <span style={{ fontSize: '24px', marginLeft: '20px' }}>Yanwen Cai's Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" style={{backgroundColor: '#B4B4B8'}}> 
            

            <NavDropdown title="Project" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/project" id="submenu">Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/project/USRA" id="submenu">USRA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project/Work-Study" id="submenu">Work-Study</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link as={Link} to="Contact" id="basic-nav-dropdown">Contact</Nav.Link>

          </Nav>

          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className=" mr-sm-2"
                aria-label="Search"
              />
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  
}

export default MyNavbar;

// Reference: https://react-bootstrap.netlify.app/docs/components/navbar
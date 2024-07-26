import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import SparkleLogo from "../images/sparkles.svg";
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
          <img src={SparkleLogo} alt="Logo" style={{ width: '35px', height: '35px', marginLeft: '10px', marginRight: '10px' }} />
          <span style={{ fontSize: '24px', marginLeft: '20px' }}>Yanwen Cai</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" style={{backgroundColor: '#B4B4B8'}}> 
            
{/* 
            <NavDropdown title="Project" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/project" id="submenu">Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/project/USRA" id="submenu">USRA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project/Work-Study" id="submenu">Work-Study</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link as={Link} to="Home" id="basic-nav-dropdown">Home</Nav.Link>
            <Nav.Link as={Link} to="About" id="basic-nav-dropdown">About</Nav.Link>
            <Nav.Link as={Link} to="Projects" id="basic-nav-dropdown">Projects</Nav.Link>

            <Nav.Link as={Link} to="Contact" id="basic-nav-dropdown">Contact</Nav.Link>

          </Nav>

          {/* <Nav>
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
          </Nav> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  
}

export default MyNavbar;

// Reference: https://react-bootstrap.netlify.app/docs/components/navbar
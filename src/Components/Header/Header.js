import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button,  Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
            <Container>
            <Navbar.Brand  as={Link} to="/">React-Movie-Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
    </Navbar>
    );
};

export default Header;
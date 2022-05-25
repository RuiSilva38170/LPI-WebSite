import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, NavDropdown, Badge, Button, Card, Table, Row, Col, Form, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext, useSearchParams } from 'react';
const Header = () => {
    const tk = sessionStorage.getItem("token");
    const queryParams = new URLSearchParams(window.location.search)
   
    let { id } = useParams();
    
    return (
        <tudo>
            <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand href={"/home/" + id}>Ambulance Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={"/home/" + id}>Home</Nav.Link>
                            <Nav.Link href={"/frota/" + id}>Frota</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" class="dropdown-menu dropdown-menu-end">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </tudo >
    );
}

export default Header;

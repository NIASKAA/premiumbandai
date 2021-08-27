import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
//import Auth from '../../utils/auth';
import './styles.css'

const Navigation = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Toggle className='navbar-header' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                               <Nav.Link exact activeClassName="active" className="navBtns" as={Link} to={'/'}>Home</Nav.Link>
                               <NavDropdown title="Models" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={'/sd'}>SD Grade</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={'/hg'}>High Grade</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={'/rg'}>Real Grade</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={'/mg'}>Master Grade</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={'/pg'}>Perfect Grade</NavDropdown.Item>
                                </NavDropdown>
                               <Nav.Link exact activeClassName="active" className="navBtns" as={Link} to={'/login'}>Login</Nav.Link>
                               <Nav.Link exact activeClassName="active" className="navBtns" as={Link} to={'/profile'}>Profile</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation

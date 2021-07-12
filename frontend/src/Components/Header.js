import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="navbar" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/"><img className="navlogo" src="../../images/logo.png" alt="logo Jerseys Factory"/></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png" alt="logo du menu"/></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart fa-lg"></i> Panier</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user fa-lg"></i> Se connecter</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
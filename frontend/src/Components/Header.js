import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="navbar" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/"><img className="navlogo" src="../../images/logo.png"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"/></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart fa-lg"></i> Panier</Nav.Link>
                            <Nav.Link href="/login"><i className="fas fa-user fa-lg"></i> Se connecter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
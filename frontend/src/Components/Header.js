import React from 'react';
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout } from "../actions/userActions";
import Search from "./Search";

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar className="navbar" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/"><img className="navlogo" src="../../images/logo.png" alt="logo Jerseys Factory"/></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png" alt="logo du menu"/></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route render={({ history }) => <Search history={history} />} />                        <Nav className="ml-auto">
                            {userInfo ? (

                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Se déconnecter</NavDropdown.Item>
                                </NavDropdown>

                                ) : (
                                    <LinkContainer to="/login">
                                        <Nav.Link><i className="fas fa-user fa-lg"></i> Se connecter</Nav.Link>
                                    </LinkContainer>
                                )
                            }

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin Menu' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Utilisateurs</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Produits</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Commandes</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}

                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart fa-lg"></i> Panier</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
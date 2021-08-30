import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="text-center text-white text-md-left mt-3 pb-3">
                    <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase text mb-4 font-weight-bold">
                            Qui sommes-nous ?
                        </h6>
                        <p>
                            Jerseys Factory est une application web de vente en ligne de maillots de football réalisé par <a href="https://www.linkedin.com/in/joseph-ifergan/" className="font-weight-bold">Joseph Ifergan</a> dans le cadre du titre de Developpeur Web professionnel.
                        </p>
                    </Col>
                    <hr className="w-100 clearfix d-md-none" />
                    <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Top ventes <i
                            className="fab fa-hotjar pink"></i></h6>
                        <p>
                            <a href="/product/612898705b88b50bbd8ebb4a">Maillot Équipe de France</a>
                        </p>
                        <p>
                            <a href="/product/612898705b88b50bbd8ebb51">Maillot Équipe du Portugal</a>
                        </p>
                        <p>
                            <a href="/product/612898705b88b50bbd8ebb4f">Maillot Équipe de l'Italie</a>
                        </p>
                        <p>
                            <a href="/product/612898705b88b50bbd8ebb4c">Maillot Équipe de l'Angleterre</a>
                        </p>
                    </Col>
                    <hr className="w-100 clearfix d-md-none" />
                    <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            Liens utiles
                        </h6>
                        <p>
                            <a href="/profile">Mon compte</a>
                        </p>
                        <p>
                            <a href="/register?redirect=/">S'inscrire</a>
                        </p>
                    </Col>
                    <hr className="w-100 clearfix d-md-none" />
                    <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p>
                            <i className="fa fa-envelope mr-3" /> contact@jfactory.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> +33 6 00 00 00 00
                        </p>
                    </Col>
                </Row>
                <hr />
                <Row className="d-flex align-items-center">
                    <Col md="12" lg="12" className="ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="social-icons list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="/" className="facebook btn-floating btn-sm rgba-white-slight">
                                        <i className="fab fa-facebook-f fa-2x" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="twitter btn-floating btn-sm rgba-white-slight">
                                        <i className="fab fa-twitter fa-2x" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="instagram btn-floating btn-sm rgba-white-slight">
                                        <i className="fab fa-instagram fa-2x" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="linkedin btn-floating btn-sm rgba-white-slight">
                                        <i className="fab fa-linkedin-in fa-2x" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-light py-5">Copyright &copy; Jerseys Factory</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

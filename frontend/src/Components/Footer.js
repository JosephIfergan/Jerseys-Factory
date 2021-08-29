import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center text-light py-5">Copyright &copy; Jerseys Factory</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
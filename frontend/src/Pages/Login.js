import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import FormContainer from "../Components/FormContainer"
import { login } from "../actions/userActions";

const Login = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1 className="title text-center my-5">Se connecter</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label> Adresse Email </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Entrez votre email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label> Mot de passe </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Entrez votre mot de passe'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' className='bg-info rounded my-3'> Se connecter </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Nouveau client ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Creer un compte ! </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default Login;
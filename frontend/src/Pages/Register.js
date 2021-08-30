import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import FormContainer from "../Components/FormContainer"
import { register } from "../actions/userActions";

const Register = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmMessage, setConfirmMessage] = useState(null)


    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setConfirmMessage('Le mot de passe ne correspond pas')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <FormContainer>
            <h1 className="title text-center my-5">S'inscrire</h1>
            {confirmMessage && <Message variant='danger'>{confirmMessage}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label> Nom </Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Entrez votre nom'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

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

                <Form.Group controlId='confirmPassword'>
                    <Form.Label> Confirmez votre mot de passe </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirmez votre mot de passe'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='info rounded my-3'> S'inscrire ! </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Déjà client ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}> Se connecter ! </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default Register;
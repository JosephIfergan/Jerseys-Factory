import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";

const Shipping = ({ history }) => {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Informations de livraison</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label> Adresse </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Entrez votre adresse'
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label> Ville </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Entrez votre ville'
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='postalCode'>
                        <Form.Label> Code postal </Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Entrez votre code postal'
                            value={postalCode}
                            required
                            onChange={(e) => setPostalCode(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='country'>
                        <Form.Label> Pays </Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Entrez votre pays'
                            value={country}
                            required
                            onChange={(e) => setCountry(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                <Button type='submit' variant='primary'> Continuer </Button>

            </Form>
        </FormContainer>
    );
};

export default Shipping;
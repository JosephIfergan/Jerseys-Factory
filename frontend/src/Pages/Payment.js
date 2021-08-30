import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";
import CheckoutSteps from "../Components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const Payment = ({ history }) => {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1 className="my-5 text-center">Mode de paiement</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Selectionnez un mode de paiement</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal ou Carte Bancaire'
                            id='PayPal'
                            name='paymentMethod'
                            value='PayPal'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type='submit' variant='info rounded my-5'>Continuer</Button>

            </Form>
        </FormContainer>
    );
};

export default Payment;
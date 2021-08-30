import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from "../Components/Message";

const Cart = ({match, location, history}) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
            }
        }, [dispatch, productId, qty])


    const removeFromCartButton = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutButton = () => {
        history.push('/login?redirect=shipping')
    }


    return (
        <Row>
            <Col md={8}>
                <h1 className="my-5">Votre panier</h1>
                {cartItems.length === 0 ? (
                    <Message variant="info">
                        Votre panier est vide <Link to="/"> Retour </Link>
                    </Message>
                ) : (
                    <ListGroup>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={3} lg={2}>
                                        <Form.Control
                                            as='select'
                                            value={item.qty}
                                            onChange={(event) =>
                                                dispatch(
                                                    addToCart(item.product, Number(event.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() => removeFromCartButton(item.product)}
                                        >
                                            <i className='fas fa-trash fa-lg'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card className="my-5">
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>
                                Total ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                            </h2>
                            <p>
                                {cartItems
                                .reduce((acc, item) => acc + item.qty * item.price, 0)
                                .toFixed(2)} €
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block btn-info rounded'
                                disabled={cartItems.length === 0}
                                onClick={checkoutButton}
                            >
                                Valider mon panier
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default Cart;
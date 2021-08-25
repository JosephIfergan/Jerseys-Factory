import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { Row, Col, Button, Card, Image, ListGroup, Form } from "react-bootstrap";
import Rating from "../Components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";


const ProductPage = ({ history, match }) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match])

    const addToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`) // Permet de rediriger vers Cart
    }



    return (
        <>
            <Link className="btn btn-info rounded my-3" to="/">Retour</Link>
            {loading ? (<Loader/>)
            : error ? (<Message variant="danger">{error}</Message>)
            : (<Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid/>
                            </Col>
                            <Col md={3}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <h2 className="product_title">{ product.name }</h2>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating
                                            value={product.rating}
                                            text={`${product.numReviews} avis`}
                                        />
                                    </ListGroup.Item>
                                    <ListGroup.Item><h1>{product.price} €</h1></ListGroup.Item>
                                    <ListGroup.Item>{product.description}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className="add-to-card btn btn-block rounded"
                                                type="button"
                                                disabled={product.countInStock === 0}
                                                onClick={addToCart}
                                        >
                                            Ajouter au panier</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Prix :</Col>
                                                <Col>
                                                    <strong>{product.price} €</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    {product.countInStock > 0 ? "En stock" : "Article indisponible"}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Quantité</Col>
                                                    <Col>
                                                        <Form.Control
                                                            as="select"
                                                            value={qty}
                                                            onChange={(event) => setQty(event.target.value)}>

                                                            {[...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            ))}
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}

                                    </ListGroup>
                                </Card>

                            </Col>
                        </Row>
                    )
            }

        </>
    );
};

export default ProductPage;


import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, Image, ListGroup } from "react-bootstrap";
import Rating from "../Components/Rating";
import products from "../products";
const ProductPage = ({ match }) => {
    const product = products.find(product => product._id === match.params.id)
    return (
        <>
            <Link className="btn btn-info rounded my-3" to="/">Retour</Link>
                <Row>
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
                                        <Col>Price:</Col>
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
                            </ListGroup>
                        </Card>

                    </Col>
                </Row>
        </>
    );
};

export default ProductPage;


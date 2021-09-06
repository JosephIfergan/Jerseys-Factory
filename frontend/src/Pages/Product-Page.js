import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from "../Components/Rating";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

import {
    listProductDetails,
    createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductPage = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector((state) => state.productReviewCreate)
    const {
        success: successProductReview,
        loading: loadingProductReview,
        error: errorProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
        }
        if (!product._id || product._id !== match.params.id) {
            dispatch(listProductDetails(match.params.id))
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
    }, [dispatch, match, successProductReview, product._id])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        )
    }

    return (
        <>
            <Link className='btn btn-info rounded my-5' to='/'>
                Retour
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        <Col md={8} lg={5}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={10} lg={4}>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h3 className="product_name">{product.name}</h3>
                                    <hr/>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating
                                        value={product.rating}
                                        text={`${product.numReviews} avis`}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className="price"> {product.price} €
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <hr/>
                                    {product.description}
                                </ListGroup.Item>
                            </ListGroup>

                            <Form>
                                <Form.Group controlId='size'>
                                    <Form.Control
                                        as='select'
                                    >
                                        <option value=''>Selectionnez la taille</option>
                                        <option value='S'>S</option>
                                        <option value='M'>M</option>
                                        <option value='L'>L</option>
                                        <option value='XL'>XL</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>

                        </Col>

                        <Col md={5} lg={3} className="product_addtocart">
                            <Card>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Prix : </Col>
                                            <Col>
                                                <strong>{product.price} €</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                {product.countInStock > 0 ?
                                                    <p className="instock">En stock</p>
                                                    : <p className="outstock">En rupture de stock</p> }
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Quantité</Col>
                                                <Col>
                                                    <Form.Control
                                                        as='select'
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            )
                                                        )}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            className='btn-block rounded bg-info'
                                            type='button'
                                            disabled={product.countInStock === 0}
                                        >
                                            Ajouter au panier
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="ratings" md={8}>
                            <hr/>
                            <h2>Avis</h2>

                            {product.reviews.length === 0 && <Message >Aucun avis sur ce produit</Message>}
                            <ListGroup>
                                {product.reviews.map((review) => (
                                    <ListGroup.Item key={review._id}>
                                        <strong>{review.name}</strong>
                                        <Rating value={review.rating} />
                                        <p>{review.createdAt.substring(0, 10)}</p>
                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                    <h2 className="ratings_title">Donnez votre avis sur ce produit !</h2>
                                    {successProductReview && (
                                        <Message variant='success'>
                                            Votre avis a bien été ajouté !
                                        </Message>
                                    )}
                                    {loadingProductReview && <Loader />}
                                    {errorProductReview && (
                                        <Message variant='danger'>{errorProductReview}</Message>
                                    )}
                                    {userInfo ? (
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group controlId='rating'>
                                                <Form.Control
                                                    as='select'
                                                    value={rating}
                                                    onChange={(e) => setRating(e.target.value)}
                                                >
                                                    <option value=''>Selectionnez...</option>
                                                    <option value='1'>1 - Trés déçu</option>
                                                    <option value='2'>2 - Plutôt satisfait</option>
                                                    <option value='3'>3 - Bon</option>
                                                    <option value='4'>4 - Très bon</option>
                                                    <option value='5'>5 - Excellent !</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId='comment'>
                                                <Form.Label>Commentaire</Form.Label>
                                                <Form.Control
                                                    as='textarea'
                                                    row='3'
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                            <Button
                                                disabled={loadingProductReview}
                                                type='submit'
                                                variant='info rounded'
                                            >
                                                Envoyer
                                            </Button>
                                        </Form>
                                    ) : (
                                        <Message>
                                             <Link to='/login'>Connectez-vous</Link> pour donner votre avis {' '}
                                        </Message>
                                    )}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default ProductPage
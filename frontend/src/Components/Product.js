import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img
                    className="card"
                    src={product.image}
                    variant='top'/>
                <img className="promo" src="../../images/hot-sale.png" alt="hot sale"/>
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="h2" className="product_title">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div" className="product_rating">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} avis`}
                        // color="#FBC740"
                    />
                </Card.Text>
                <Card.Text as="h3" className="product_price">
                    {product.price} €
                </Card.Text>

                <Card.Text as="div" className="product_left">
                    {product.countInStock > 0 ?
                        <p className="instock">Encore {product.countInStock} disponibles !</p>
                        : <p className="outstock">En rupture de stock</p> }
                </Card.Text>

            </Card.Body>

        </Card>
    );
};

export default Product;
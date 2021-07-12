import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img
                    className="card"
                    src={product.image}
                    variant='top'/>
            </a>

            <Card.Body>
                <Card.Title as="h2" className="product_title">
                    <strong>{product.name}</strong>
                </Card.Title>

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

                <Card.Text as="p" className="product_left">
                    Encore {product.countInStock} disponibles !
                </Card.Text>

            </Card.Body>

        </Card>
    );
};

export default Product;
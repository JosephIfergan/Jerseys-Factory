import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </a>

            <Card.Body>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>

                <Card.Text as="div">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} avis`}
                        // color="#FBC740"
                    />
                </Card.Text>
                <Card.Text as="h3" className="price">{product.price} €</Card.Text>

                <Card.Text as="p">Encore {product.countInStock} disponibles !</Card.Text>

            </Card.Body>

        </Card>
    );
};

export default Product;
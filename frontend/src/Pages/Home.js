import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Col, Row } from 'react-bootstrap';
import Product from "../Components/Product";
import { listProducts } from "../actions/productActions";

const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1>Nos produits</h1>
            {loading ? (<h2>Chargement...</h2>)
            : error ? (<h3>{error}</h3>)
            : <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
              </Row>
            }
        </>
    );
};

export default Home;
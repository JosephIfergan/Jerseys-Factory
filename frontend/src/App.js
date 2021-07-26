import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./Pages/Home";
import ProductPage from "./Pages/Product-Page";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-3">
                <Container>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/cart/:id?" component={Cart}/>
                    {/*Le "?" permet d'y accéder même si le panier est vide et donc qu'il n'y pas d'ID */}
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
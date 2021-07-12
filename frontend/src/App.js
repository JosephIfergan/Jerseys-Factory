import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./Pages/Home";
import ProductPage from "./Pages/Product-Page";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-3">
                <Container>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product/:id" component={ProductPage}/>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
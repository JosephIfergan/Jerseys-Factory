import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import ProductPage from "./Pages/Product-Page";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import Payment from "./Pages/Payment";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import UserList from "./Pages/UserList";



const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-3">
                <Container>
                    <Route path="/" exact component={Home}/>
                    <Route component={NotFound}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/shipping" exact component={Shipping}/>
                    <Route path="/payment" exact component={Payment}/>
                    <Route path="/placeorder" exact component={PlaceOrder}/>
                    <Route path="/order/:id" exact component={Order}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/cart/:id?" component={Cart}/>
                    <Route path="/admin/userlist" component={UserList}/>
                    {/*Le "?" permet d'y accéder même si le panier est vide et donc qu'il n'y pas d'ID */}
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
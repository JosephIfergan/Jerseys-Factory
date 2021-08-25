import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./Pages/Home"
// import NotFound from "./Pages/NotFound";
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
import UserEdit from "./Pages/UserEdit";
import ProductList from "./Pages/ProductList";
import ProductEdit from "./Pages/ProductEdit";



const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-3">
                <Container>
                    <Switch>
                    <Route path="/" exact component={Home}/>
                    {/*<Route path='/404' component={NotFound} />*/}
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
                    <Route path="/admin/user/:id/edit" component={UserEdit}/>
                    <Route path="/admin/productlist" component={ProductList}/>
                    <Route path="/admin/product/:id/edit" component={ProductEdit}/>
                    {/*Le "?" permet d'y accéder même si le panier est vide et donc qu'il n'y pas d'ID */}
                    {/*<Redirect to="/404" />*/}
                    </Switch>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
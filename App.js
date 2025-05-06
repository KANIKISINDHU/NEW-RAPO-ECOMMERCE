import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import Register from './Register';
import ShoppingCart from './ShoppingCart';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/cart" component={ShoppingCart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;


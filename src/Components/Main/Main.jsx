/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Site Pages/Home page/Home";
import About from "../Site Pages/About/About";
import Contact from "../Site Pages/Contact/Contact";
import MyCart from "../Site Pages/My Cart/My cartF.jsx";
import SignUp from "../Site Pages/Register/signupPage";
import SignIn from "../Site Pages/Register/signinPage";
import SearchResults from "../Site Pages/Search results/SearchResults";
import CategoryPage from "../Site Pages/CategoryListingPages/categoryListing";
import ProductDetail from "../Site Pages/product details/ProductDetail";
import NotFound from "../Site Pages/Errors/notFound";
import Checkout from "../Site Pages/checkout/checkout";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/cart' component={MyCart}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/signin' component={SignIn}></Route>
          <Route exact path='/search_results' component={SearchResults}></Route>
          <Route exact path='/checkout' component={Checkout}></Route>
          <Route exact path='/notFound' component={NotFound} status={404}></Route>
          <Route exact path='/products/:id' component={ProductDetail}></Route>
          <Route exact path='/:category' component={CategoryPage}></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

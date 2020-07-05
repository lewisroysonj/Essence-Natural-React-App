import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Site Pages/Home page/Home';
import About from '../Site Pages/About/About';
import Contact from '../Site Pages/Contact/Contact';
import MyCart from '../Site Pages/My Cart/My cart';
import SignUp from '../Site Pages/Register/signupPage';
import SignIn from '../Site Pages/Register/signinPage';
import SearchResults from '../Site Pages/Search results/SearchResults';
import BodyLotionsPage from '../Site Pages/CategoryListingPages/BodyLotionCategory';
import FacewashPage from '../Site Pages/CategoryListingPages/FacewashCategory';
import NutritionFoodPage from '../Site Pages/CategoryListingPages/Nutrition Diet Foods';
import ProductDetail from '../Site Pages/product details/ProductDetail';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route exact path="/about" component={About}  ></Route>
                    <Route exact path="/contact" component={Contact}  ></Route>
                    <Route exact path="/cart" component={MyCart}  ></Route>
                    <Route exact path="/signup" component={SignUp} ></Route>
                    <Route exact path="/signin" component={SignIn} ></Route>
                    <Route exact path="/search_results" component={SearchResults} ></Route>
                    <Route exact path="/body_lotions" component={BodyLotionsPage} ></Route>
                    <Route exact path="/facewash" component={FacewashPage} ></Route>
                    <Route exact path="/nutrition_diet_foods" component={NutritionFoodPage} ></Route>
                    <Route exact path="/product_details" component={ProductDetail} ></Route>
                </Switch>
            </div>
        )
    }
}
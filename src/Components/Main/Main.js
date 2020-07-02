import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Site Pages/Home page/Home';
import About from '../Site Pages/About/About';
import Contact from '../Site Pages/Contact/Contact';
import Search from '../Site Pages/Search' ;
import MyCart from '../Site Pages/My Cart/My cart';
import SignUp from '../Site Pages/Register/signupPage';
import SignIn from '../Site Pages/Register/signinPage'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route exact path="/about" component={About}  ></Route>
                    <Route exact path="/contact" component={Contact}  ></Route>
                    <Route exact path="/cart" component={MyCart}  ></Route>
                    <Route exact path="/search" component={Search}  ></Route>
                    <Route exact path="/signup" component={SignUp} ></Route>
                    <Route exact path="/signin" component={SignIn} ></Route>
                </Switch>
            </div>
        )
    }
}
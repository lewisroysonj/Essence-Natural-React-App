import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Register from '../Site Pages/Register/Register';
import Home from '../Site Pages/Home page/Home';
import About from '../Site Pages/About';
import Contact from '../Site Pages/Contact';
import Search from '../Site Pages/Search' ;
import MyCart from '../Site Pages/My cart';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route exact path="/register" component={Register}  ></Route>
                    <Route exact path="/about" component={About}  ></Route>
                    <Route exact path="/contact" component={Contact}  ></Route>
                    <Route exact path="/cart" component={MyCart}  ></Route>
                    <Route exact path="/search" component={Search}  ></Route>
                </Switch>
            </div>
        )
    }
}
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './../components/landingpage';
import Contact from './../components/contact';
import About from './../components/about';
import Login from './../components/loginpage';
import MyAccount from './../components/myaccountlanding';
import Clp from './../components/clp';
import Cart from './../components/cart';
import Favorite from './../components/favorite';
import PDP from './../components/pdp';

const MainRoute = () => (
    <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/signin" component= {Login} />
        <Route exact path="/myaccount" component= {MyAccount} />
        <Route exact path="/clp" component= {Clp} />
        <Route exact path="/cart" component= {Cart} />
        <Route exact path="/favorite" component= {Favorite} />
        <Route exact path="/pdp" component= {PDP} />
    </Switch>
)

export default MainRoute;


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './../components/landingpage';
import Contact from './../components/contact';
import About from './../components/about';
import Login from './../components/loginpage';
import CreateAccount from './../components/createaccount';
import Clp from './../components/clp';
import ShoppingCart from './../components/shoppingcart';
import Favorite from './../components/favorite';
import PDP from './../components/pdp';
import PLP from './../components/plp';
import Data from './../components/data';
import ClearCache from './../components/complibrary/clearcache';
import CheckoutOptions from './../components/checkoutoptions';

const MainRoute = () => (
    <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/signin" component= {Login} />
        <Route exact path="/createaccount" component= {CreateAccount} />
        <Route exact path="/clp" component= {Clp} />
        <Route exact path="/shoppingcart" component= {ShoppingCart} />
        <Route exact path="/favorite" component= {Favorite} />
        <Route exact path="/pdp" component= {PDP} />
        <Route exact path="/plp" component= {PLP} />
        <Route exact path="/data" component= {Data} />
        <Route exact path="/clearcache" component= {ClearCache} />
        <Route exact path="/checkoutoptions" component= {CheckoutOptions} />
    </Switch>
)

export default MainRoute;


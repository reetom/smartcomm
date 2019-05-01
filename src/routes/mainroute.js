import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './../components/landingpage';
import Contact from './../components/contact';
import About from './../components/about';
import Login from './../components/loginpage';
import CreateAccount from './../components/createaccount';
import Clp from './../components/clp';
import Cart from './../components/cart';
import Favorite from './../components/favorite';
import PDP from './../components/pdp';
import PLP from './../components/plp';
import Data from './../components/data';
import Data1 from './../components/data1';
import Data2 from './../components/data2';

const MainRoute = () => (
    <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/signin" component= {Login} />
        <Route exact path="/createaccount" component= {CreateAccount} />
        <Route exact path="/clp" component= {Clp} />
        <Route exact path="/cart" component= {Cart} />
        <Route exact path="/favorite" component= {Favorite} />
        <Route exact path="/pdp" component= {PDP} />
        <Route exact path="/plp" component= {PLP} />
        <Route exact path="/data" component= {Data} />
        <Route exact path="/data1" component= {Data1} />
        <Route exact path="/data2" component= {Data2} />

    </Switch>
)

export default MainRoute;


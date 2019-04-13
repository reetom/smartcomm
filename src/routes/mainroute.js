import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './../components/landingpage';
import Contact from './../components/contact';
import About from './../components/about';
import Login from './../components/loginpage';
import MyAccount from './../components/myaccountlanding';

const MainRoute = () => (
    <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/signin" component= {Login} />
        <Route exact path="/myaccount" component= {MyAccount} />
    </Switch>
)

export default MainRoute;


import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';
import Modal from './modal';
import landingbanner from '../../src/assets/banners/landingbanner6.jpg';
import bag9 from '../../src/assets/products/bag9.jpg';
import bag10 from '../../src/assets/products/bag10.jpg';
import bag11 from '../../src/assets/products/bag11.jpeg';
import bag12 from '../../src/assets/products/bag12.jpg';
import bag4 from '../../src/assets/products/bag4.jpeg';
import bag5 from '../../src/assets/products/bag5.jpeg';
import bag6 from '../../src/assets/products/bag6.jpeg';
import bag7 from '../../src/assets/products/bag7.jpeg';

class Landing extends Component {

    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                <Cell col={12}>
                        <div className="promo-icon-block">
                             <p>Free shipping over $35 purchase, hurry!</p>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1> The only bag we don't have is the one you don't like!</h1>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div>
                            <img
                                src={landingbanner}
                                alt="landingbanner1"
                                className="landing-banner"
                            />
                        </div>
                        <div className="new-arrivals-section"> 
                        <div className="new-arrivals-text">
                            <h2>New Arrivals</h2>
                        </div>
                        <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <Link to="/pdp">
                                    <img
                                    src={bag9}
                                    alt="bag1"
                                    className="clp-card-image"
                                    />
                                </Link>

                                </CardTitle>
                                <CardText>
                                    Gucci 2016 Brown Leather Marmont Shoulder Bag w/ Green & Red Stripe
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}>
                                    <Modal/>
                                    </IconButton>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                              <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag10}
                                alt="bag10"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Gucci Multicolor Striped Horsebit Bag
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                              <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag11}
                                alt="bag11"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Gucci's Mini Round Ophidia and GG Marmont Bags 
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                              <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag12}
                                alt="bag12"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Gucci's Mini Ophidia GG Backpack 
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                        </div>
                        </div>
                        <div className="currently-trending-section">
                            <div className="currently-trending-text">
                                <h2>Currently Trending</h2>
                            </div>
                            <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <Link to="/pdp">
                                    <img
                                    src={bag5}
                                    alt="bag5"
                                    className="clp-card-image"
                                    />
                                </Link>

                                </CardTitle>
                                <CardText>
                                    Gucci 2016 Brown Leather Marmont Shoulder Bag w/ Green & Red Stripe
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                              <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag6}
                                alt="bag6"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Gucci Multicolor Striped Horsebit Bag
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                              <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag11}
                                alt="bag11"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Gucci's Mini Round Ophidia and GG Marmont Bags 
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                              <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag7}
                                alt="bag7"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Gucci's Mini Ophidia GG Backpack 
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                        </div>
                        </div>

                        <div className="email-sign-up-text">
                            <h2>EMAIL SIGN UP</h2>
                        </div>
                        <div className="email-sign-up">
                            <Textfield
                                onChange={() => {}}
                                label="Please Enter Your Email Address"
                                style={{width: '235px'}}
                            />
                            <Button class="pdp-button" raised colored>Sign Up</Button>
                        </div>
                        <div className="know-your-gucci-text">
                            <h2>KNOW YOUR GUCCI</h2>
                        </div>
                        <div className="video-iframe"> 
                            <iframe width="800" height="600" src="https://www.youtube.com/embed/c3SGeHNSJTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;
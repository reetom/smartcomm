import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import landingbanner from '../../src/assets/banners/landingbanner2.jpg';
import bag9 from '../../src/assets/products/bag9.jpg';
import bag10 from '../../src/assets/products/bag10.jpg';
import bag11 from '../../src/assets/products/bag11.jpeg';
import bag12 from '../../src/assets/products/bag12.jpg';

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
                        <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag9}
                                alt="bag1"
                                className="clp-card-image"
                            />
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
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;
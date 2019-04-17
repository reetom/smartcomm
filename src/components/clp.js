import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import landingbanner from '../../src/assets/banners/landingbanner3.jpg';
import { ProductCard }from './productcard';
import {Link} from 'react-router-dom';
import bag1 from '../../src/assets/products/bag1.jpeg';
import bag2 from '../../src/assets/products/bag2.jpeg';
import bag3 from '../../src/assets/products/bag3.jpeg';
import bag4 from '../../src/assets/products/bag4.jpeg';
import bag5 from '../../src/assets/products/bag5.jpeg';
import bag6 from '../../src/assets/products/bag6.jpeg';
import bag7 from '../../src/assets/products/bag7.jpeg';
import bag8 from '../../src/assets/products/bag8.jpeg';
import bag9 from '../../src/assets/products/bag9.jpg';
import bag10 from '../../src/assets/products/bag10.jpg';
import bag11 from '../../src/assets/products/bag11.jpeg';
import bag12 from '../../src/assets/products/bag12.jpg';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "clp-landing-grid">
                    <Cell col={12}>
                        <div>
                            <Link to ="/pdp">
                                <img
                                    src={landingbanner}
                                    alt="landingbanner1"
                                    className="clp-landing-banner"
                                />
                            </Link>
                        </div>
                        <div className="breadcrumb">
                            <h1>Departments > Women</h1>
                        </div>
                        <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag1}
                                alt="bag1"
                                className="clp-card-image"
                                />
                                </CardTitle>
                                <CardText>
                                    Small Sylvie Leather Shoulder Bag
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
                                    src={bag2}
                                    alt="bag2"
                                    className="clp-card-image"
                                />
                                </CardTitle>
                                <CardText>
                                Black Sylvie leather shoulder bag
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
                                src={bag3}
                                alt="bag3"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                Boston Webby Speedy 6401 Brown Canvas Cross Body Bag
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
                                src={bag4}
                                alt="bag4"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                Zumi Small leather tote
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
                        </div>
                        <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <img
                                src={bag5}
                                alt="bag5"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Sylvie Small Top-Handle Satchel Bag
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
                                    GIRLS UNICORN TOTE BAG
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
                                    GG Marmont Tall Chevron Leather Crossbody Bag
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
                                src={bag8}
                                alt="bag8"
                                className="clp-card-image"
                            />
                                </CardTitle>
                                <CardText>
                                    Mini Marmont Chevron Shoulder Bag
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
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
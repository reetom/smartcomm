import React, {Component} from 'react';
import {CardText,Card,CardTitle, CardMenu,IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Form, FormGroup, Button, Input} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

import landingbanner from '../../src/assets/banners/landingbanner6.jpg';
import bag9 from '../../src/assets/products/bag9.jpg';
import bag10 from '../../src/assets/products/bag10.jpg';
import bag11 from '../../src/assets/products/bag11.jpeg';
import bag12 from '../../src/assets/products/bag12.jpg';
import bag5 from '../../src/assets/products/bag5.jpeg';
import bag6 from '../../src/assets/products/bag6.jpeg';
import bag7 from '../../src/assets/products/bag7.jpeg';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.onSingUpButtonClick = this.onSingUpButtonClick.bind(this);
      }
  
    onSingUpButtonClick(event){
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('email'));
    } 
    render() {

        return(
            <div className="page-background">
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <div className="one-em-spacing"/>
                        <div className="promo-icon-block">
                             <p>Free shipping over $35 purchase, hurry!</p>
                        </div>
                        <div className="banner-text">
                            <h1> The only bag we don't have is the one you don't like!</h1>
                        </div>
                        <div>
                            <img
                                src={landingbanner}
                                alt="landingbanner1"
                                className="landing-banner"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <div className="new-arrivals-section"> 
                        <div className="one-em-spacing"/>
                        <SectionHeadingAndWhiteLine heading="Trending Now" color="white"/>
                        <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <Link to="/pdp">
                                    <img
                                    src={bag9}
                                    alt="bag1"
                                    className="card-image"
                                    />
                                </Link>

                                </CardTitle>
                                <CardText>
                                    Gucci 2016 Brown Leather Marmont Shoulder Bag w/ Green & Red Stripe
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}>

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
                                className="card-image"
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
                                className="card-image"
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
                                className="card-image"
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
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <div className="currently-trending-section">
                            <div className="one-em-spacing"/>
                            <SectionHeadingAndWhiteLine heading="New Arrivals" color="white"/>
                            <div className="clp-background"> 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <Link to="/pdp">
                                    <img
                                    src={bag5}
                                    alt="bag5"
                                    className="card-image"
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
                                className="card-image"
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
                                className="card-image"
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
                                className="card-image"
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
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="email-section">
                            <div className="one-em-spacing"/>
                            <SectionHeadingAndWhiteLine heading="Sign Up For Our Newsletter" color="white"/>
                            <div className="email-sign-up">
                                <Form inline>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="email" name="email" id="Email" placeholder="email@something.com" />
                                    </FormGroup>
                                    <Button color="primary" onClick={this.onSingUpButtonClick} >Sign Up</Button>
                                </Form>
                            </div>
                            <div className="one-em-spacing"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="know-your-gucci-text">
                            <h2>KNOW YOUR GUCCI</h2>
                        </div>
                        <div className="video-iframe"> 
                            <iframe width="800" height="600" src="https://www.youtube.com/embed/c3SGeHNSJTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="one-em-spacing"/>
        </div>

        )
    }
}
export default Landing;
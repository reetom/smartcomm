import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Button, Input} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import BuildProductCard from './complibrary/buildproductcard';
import NewArrivals from './../data/newarrivals';
import landingbanner from '../../src/assets/banners/landingbanner6.jpg';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  var mailOptions = {
    from: 'reetom@gmail.com',
    to: 'reetom@skava.com',
    subject: 'SmartComm Subscription',
    text: 'Thank you for subscribing to SmartComm'
  };


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingNowCardUnit:"",
            newArrivalsCardUnit:""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.buildNewArrivals = this.buildNewArrivals.bind(this);
        this.buildTrendingNow = this.buildTrendingNow.bind(this);
      }

    onSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('email'));
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } 

    buildNewArrivals(){
        //loop through every product in the array and build the card.
        const newArrivalsCardUnit = NewArrivals.map(product =>  <BuildProductCard productFromParent={product}/>);
        this.setState({newArrivalsCardUnit:newArrivalsCardUnit});
    }
    
    buildTrendingNow(){
        //loop through every product in the array and build the card.
        const trendingNowCardUnit = NewArrivals.map(product =>  <BuildProductCard productFromParent={product}/>);
        this.setState({trendingNowCardUnit: trendingNowCardUnit});
    }

    componentDidMount(){
        this.buildNewArrivals();
        this.buildTrendingNow();
    }

    render() {
        const {newArrivalsCardUnit, trendingNowCardUnit} = this.state;
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
                            <div className="clp-grid"> 
                                {newArrivalsCardUnit}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <div className="currently-trending-section">
                        <div className="one-em-spacing"/>
                            <SectionHeadingAndWhiteLine heading="New Arrivals" color="white"/>
                            <div className="clp-grid"> 
                                {trendingNowCardUnit}
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
                                <Form inline onSubmit = {this.onSubmit}>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="email" name="email" id="Email" placeholder="email@something.com" />
                                    </FormGroup>
                                    <Button color="primary" type="submit" >Sign Up</Button>
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
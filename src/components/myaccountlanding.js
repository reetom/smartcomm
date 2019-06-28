import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Snackbar} from 'react-mdl';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';


class MyAccountLanding extends Component {
    constructor(props){
        super(props);
        

        this.logOut = this.logOut.bind(this);
        this.viewProfile = this.viewProfile.bind(this);
        this.veiwAddresses = this.veiwAddresses.bind(this);
        this.viewPayments = this.viewPayments.bind(this);
        this.viewPromotions = this.viewPromotions.bind(this);
        this.myorders = this.myorders.bind(this);

    }

    myorders(){

    }

    viewPromotions(){

    }

    viewPayments(){

    }
    
    viewProfile(){

    }

    veiwAddresses(){

    }

    logOut(){
        //Empty the Application Context
        localStorage.setItem("ApplicationContext","");
        //Send the user to home page.
        let path = '/';
        this.props.history.push(path);
    }
    
    render() {

        return(
            <div className="page-background">
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <SectionHeadingAndWhiteLine heading="Welcome, Reetom Hazarika" color="white"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <div className="button-section">
                                <div className="one-em-spacing"/>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewProfileDetails}>My Profile</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.myorders}>My Orders</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewProfileDetails}>Addresses</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewProfileDetails}>Payments</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewProfileDetails}>Promotions</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewProfile}>Preferences</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block  onClick={this.logOut}>Log Out</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={9}>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MyAccountLanding;
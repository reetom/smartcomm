import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Snackbar} from 'react-mdl';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';


class MyAccountLanding extends Component {
    constructor(props){
        super(props);
        this.state={
            displayString:""
        }

        this.logOut = this.logOut.bind(this);
        this.viewProfile = this.viewProfile.bind(this);
        this.veiwAddresses = this.veiwAddresses.bind(this);
        this.viewPayments = this.viewPayments.bind(this);
        this.viewPromotions = this.viewPromotions.bind(this);
        this.myorders = this.myorders.bind(this);
        this.viewPreferences = this.viewPreferences.bind(this);
    }

    myorders(){

        this.setState({displayString: "Display Order History"});
    }

    viewPromotions(){

        this.setState({displayString: "Display Promotions"});
    }

    viewPayments(){

        this.setState({displayString: "Display Payments"});
    }
    
    viewProfile(){

        this.setState({displayString: "Display Profile Info"});
    }

    veiwAddresses(){

        this.setState({displayString: "Display Addresses"});
    }

    viewPreferences(){

        this.setState({displayString: "Display Preferences"});
    }

    logOut(){
        //Empty the Application Context
        localStorage.setItem("ApplicationContext","");
        //Send the user to home page.
        let path = '/';
        this.props.history.push(path);
    }
    
    render() {
        const {displayString} = this.state;
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
                                    <Button color="primary" block type="submit" onClick={this.viewProfile}>My Profile</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.myorders}>My Orders</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.veiwAddresses}>Addresses</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewPayments}>Payments</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewPromotions}>Promotions</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block type="submit" onClick={this.viewPreferences}>Preferences</Button>
                                </div>
                                <div className="one-em-margin">
                                    <Button color="primary" block  onClick={this.logOut}>Log Out</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={9}>
                            {displayString}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MyAccountLanding;
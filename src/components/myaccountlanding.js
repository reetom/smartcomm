import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Snackbar} from 'react-mdl';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import MyOrders from './myaccount/myorders';
import Promotions from './myaccount/promotions';
import MyProfile from './myaccount/myprofile';
import Payments from './myaccount/payments';
import Preferences from './myaccount/preferences';
import Addresses from './myaccount/addresses';


class MyAccountLanding extends Component {
    constructor(props){
        super(props);
        this.state={
            displayString:"",
            contentHeading:""
        }

        this.logOut = this.logOut.bind(this);
        this.viewProfile = this.viewProfile.bind(this);
        this.veiwAddresses = this.veiwAddresses.bind(this);
        this.viewPayments = this.viewPayments.bind(this);
        this.viewPromotions = this.viewPromotions.bind(this);
        this.myOrders = this.myOrders.bind(this);
        this.viewPreferences = this.viewPreferences.bind(this);
    }

    myOrders(){
        var displayString = <MyOrders/>
        this.setState({displayString: displayString});
        this.setState({contentHeading:"My Orders"});
    }

    viewPromotions(){
        var displayString = <Promotions/>
        this.setState({displayString: displayString});
        this.setState({contentHeading:"Promotions"});
    }

    viewPayments(){
        var displayString = <Payments/>
        this.setState({displayString: displayString});
        this.setState({contentHeading:"Payments"});
    }
    
    viewProfile(){
        var displayString = <MyProfile/>
        this.setState({displayString: displayString});
        this.setState({contentHeading:"My Profile"});
    }

    veiwAddresses(){
        var displayString = <Addresses/>
        this.setState({displayString: displayString});
        this.setState({contentHeading:"Addresses"});
    }

    viewPreferences(){
        var displayString = <Preferences/>
        this.setState({displayString: displayString});
        this.setState({contentHeading:"Preferences"});
    }

    logOut(){
        //Empty the Application Context
        localStorage.setItem("ApplicationContext","");
        //Send the user to home page.
        let path = '/';
        this.props.history.push(path);
    }

    componentDidMount(){
        this.viewPromotions();
    }
    
    render() {
        const {displayString, contentHeading} = this.state;
        return(
            <div className="page-background">
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <SectionHeadingAndWhiteLine heading={contentHeading} color="white"/>
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
                                    <Button color="primary" block type="submit" onClick={this.myOrders}>My Orders</Button>
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
import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container, ButtonGroup, FormFeedback} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import UpdateCart from './complibrary/updatecart';

class CheckoutPage extends Component {

    constructor(...args){
        super(...args);
        this.state = {};
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onRadioBtnClick(rSelected) {
        var shippingMethodAndPrice={};
        this.setState({ rSelected });
        console.log("shipping method selected :" + rSelected);
        //Set the shipping method and price in the cart object.
        switch(rSelected.toString()){
            case '1': shippingMethodAndPrice ={"shippingMethod":"Economy Shipping","shippingPrice":"0.00", "expectedDelivery":" 3-4 weeks"};
            break;

            case '2': shippingMethodAndPrice ={"shippingMethod":"Standard Shipping","shippingPrice":"7.99", "expectedDelivery":" 1 weeks"};
            break;

            case '3': shippingMethodAndPrice ={"shippingMethod":"Expedite Shipping","shippingPrice":"24.95", "expectedDelivery":" Next day by air"};
            break;

            default:
            break;
        }
        //UpdatedCart price in local storage
        UpdateCart("updateShippingMethodAndPrice", shippingMethodAndPrice);
      }

      onSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        var shippingAddress = { "firstName":data.get('firstName'),
                                "lastName":data.get('lastName'),
                                "streetAddress":data.get('streetAddress'),
                                "city":data.get('city'),
                                "state":data.get('state'),
                                "zipcode":data.get('zipcode'),
                                "country":data.get('country')
                            };
        var billingAddress = { "firstName":data.get('billingFirstName'),
                                "lastName":data.get('billingLastName'),
                                "streetAddress":data.get('billingStreetAddress'),
                                "city":data.get('billingCity'),
                                "state":data.get('billingState'),
                                "zipcode":data.get('billingZipcode'),
                                "country":data.get('billingCountry')
                        };
        //Update the billing and shipping address in the cart object.
        UpdateCart("updateShippingAddress",shippingAddress);
        UpdateCart("updateBillingAddresss",billingAddress);
        console.log("Redirecting to order review page");
        let path = '/orderreviewpage';
        this.props.history.push(path);
    }

    render() {

        return(
            <div className="page-background">
            <div className="white-text">
            <Container fluid >
                <Form onSubmit = {this.onSubmit}>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Proceed to Checkout" color="white"/>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <SectionHeadingAndWhiteLine heading="Shipping Address" color="white"/>
                            <Row >
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FormGroup>
                                        <Label>Street Address</Label>
                                        <Input type="text" name="streetAddress" id="streetAddress" placeholder="Enter Street Address" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>City</Label>
                                        <Input type="text" name="city" id="city" placeholder="Enter City" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>State</Label>
                                        <Input type="text" name="state" id="state" placeholder="Enter State" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Zipcode</Label>
                                        <Input type="text" name="zipcode" id="zipcode" placeholder="Enter Zipcode" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Country</Label>
                                        <Input type="text" name="country" id="country" placeholder="Enter Country Code" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm="6">
                            <SectionHeadingAndWhiteLine heading="Billing Address" color="white"/>
                            <Row >
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input type="text" name="billingFirstName" id="billingFirstName" placeholder="Enter First Name" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input type="text" name="billingLastName" id="billingLastName" placeholder="Enter Last Name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FormGroup>
                                        <Label>Street Address</Label>
                                        <Input type="text" name="billingStreetAddress" id="billingStreetAddress" placeholder="Enter Street Address" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>City</Label>
                                        <Input type="text" name="billingCity" id="billingCity" placeholder="Enter City" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>State</Label>
                                        <Input type="text" name="billingState" id="billingState" placeholder="Enter State" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Zipcode</Label>
                                        <Input type="text" name="billingZipcode" id="billingZipcode" placeholder="Enter Zipcode" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Country</Label>
                                        <Input type="text" name="billingCountry" id="billingCountry" placeholder="Enter Contry Code" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <SectionHeadingAndWhiteLine heading="Select Shipping Method" color="white"/>
                    </Row>
                    
                    <Row>
                        <Col sm={3}>
                            <div className="align-right">
                                <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Free Shipping</Button>
                            </div>
                        </Col>
                        <Col sm={9}>
                                Estimated Delivery Date:  Friday, June 30th  if order placed in the next 22 hours - FREE
                        </Col>
                    </Row>
                    <Row>
                        <div className="one-em-spacing"></div>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <div className="align-right">
                                <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Standard Shipping</Button>
                            </div>
                        </Col>
                        <Col sm={9}>
                            Estimated Delivery Date:  Friday, June 25th  if order placed in the next 22 hours - $7.99
                        </Col>
                    </Row>
                    <Row>
                        <div className="one-em-spacing"></div>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <div className="align-right">
                                <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Expedite Shipping</Button>
                            </div>
                        </Col>
                        <Col sm={9}>
                            Estimated Delivery Date:  Friday, June 21st  if order placed in the next 22 hours - $24.95
                        </Col>
                    </Row>

     
                    <div className="order-review-button">
                        <Button color="primary" type="submit">Review Your Order</Button>
                    </div>
                </Form>
            </Container>
        </div>
        </div>
        )
    }
}
export default CheckoutPage;
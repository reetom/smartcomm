import React, {Component} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';


class CheckoutPage extends Component {

    constructor(...args){
        super(...args);
        this.state = { validated: false };
    }

    handleSubmit(event){
        console.log("Hello Hello Hello");
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });

        console.log("Order Review button submitted");
        let path = '/orderreviewpage';
        this.props.history.push(path);
    }

    render() {
        const { validated } = this.state;
        return(
            <div className="page-background">
                <SectionHeadingAndWhiteLine heading="Proceed to Checkout" color="white"/>
                <div className="checkout-address-container">
                    <div className="content-center">
                    <div className="shipping-address-form">
                        <SectionHeadingAndWhiteLine heading="Shipping Address" color="white"/>

                        <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group controlId="validateFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Frist Name" />
                            </Form.Group>
                            <Form.Group controlId="validateLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group controlId="validateStreetAddreess">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Street Address" />
                            </Form.Group>
                            <Form.Group controlId="validateCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" />
                            </Form.Group>
                            <Form.Group controlId="valiateState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter State" />
                            </Form.Group>
                            <Form.Row>

                                    <Form.Group as={Col} controlId="validateZipcode">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Zip Code" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="validateCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Country" />
                                    </Form.Group>

                            </Form.Row>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Same as Billing Address"/>
                            </Form.Group>

                        </Form>
                    </div>
                    </div>
                    
                    <div className="shipping-address-form"> 
                    <Form>  
                            <SectionHeadingAndWhiteLine heading="Billing Address" color="white"/>
                            <Form.Group controlId="validateBillingFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Frist Name"/>
                            </Form.Group>
                            <Form.Group controlId="validateBillingLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group controlId="validateBillingStreetAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Street Address" />
                            </Form.Group>
                            <Form.Group controlId="validateBillingCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" />
                            </Form.Group>
                            <Form.Group controlId="validateBillingState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter State" />
                            </Form.Group>
                            <Form.Group controlId="validateBillingZipcode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Zip Code" />
                            </Form.Group>
                            <Form.Group controlId="validateBillingCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter Country" />
                            </Form.Group>
                                
                        </Form>
                    </div>
            </div>

            <SectionHeadingAndWhiteLine heading="Select Shipping Method" color="white"/>
            <div className="shipping-container">
                <Form>
                    <div className="mb-3">
                        <div className="checkout-shipping-radio-button"> 
                            <Form.Check 
                                    type="radio"
                                    id="radio-free-shipping"
                                    label="Standard Ground Shipping - Free"
                                />
                        </div>
                        <div className="muted-text">
                            Estimated Delivery Date:  Friday, June 25th  if order placed in the next 14 hours.
                        </div>
                        <div className="checkout-shipping-radio-button">
                            <Form.Check 
                                    type="radio"
                                    id="radio-economy-shipping"
                                    label="Economy Shipping- $7"
                                />
                        </div>
                        <div className="muted-text">
                            Estimated Delivery Date:  Monday, June 17th  if order placed in the next 14 hours
                        </div>
                        <div className="checkout-shipping-radio-button">
                            <Form.Check 
                                    type="radio"
                                    id="radio-expedite-shipping"
                                    label="Expedite Shipping- $35"
                                />
                        </div>
                        <div className="muted-text">
                            Estimated Delivery Date:  Friday, June 14th  if order placed in the next 14 hours.
                        </div>
                    </div>
                </Form>
            </div>

                        <div className="order-review-button">                    
                                    <Button type="submit" onClick={(e) => this.handleSubmit}>Review Your Order</Button>
                        </div>
                    </div>

        )
    }
}
export default CheckoutPage;
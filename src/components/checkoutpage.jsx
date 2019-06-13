import React, {Component} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

class CheckoutPage extends Component {

    render() {
        return(
            <div>
                <div><h3>Shipping</h3></div>
                <div className="checkout-address-container">
                
                    <div className="shipping-address-form">
                        <Form>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Frist Name" onChange={this.handleChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="shipping-address-form"> 
                    <Form>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Frist Name" onChange={this.handleChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group as={Col} controlId="formBasicConfirmPassword">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Col} controlId="formBasicConfirmPassword">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Col} controlId="formBasicConfirmPassword">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Col>
                                </Form.Row>
                        </Form>
                    </div>
            </div>
            <div><h3>Shipping</h3></div>
            <div>
            <ColoredLine color="white"/>
            </div>
        </div>

        )
    }
}
export default CheckoutPage;
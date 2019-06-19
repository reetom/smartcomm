import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Container} from 'reactstrap';
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
            <Container>
                <Row>
                    <SectionHeadingAndWhiteLine heading="Proceed to Checkout" color="white"/>
                </Row>
                <Row>
                    <Col xs="6">
                        <SectionHeadingAndWhiteLine heading="Shipping Address" color="white"/>
                    </Col>
                    <Col xs="6">
                        <SectionHeadingAndWhiteLine heading="Billing Address" color="white"/>
                    </Col>
                </Row>
            </Container>

                
                <div className="">
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">First Name</Label>
                                    <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Last Name</Label>
                                    <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
                                </FormGroup>
                            </Col>
                        </Row>
        
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
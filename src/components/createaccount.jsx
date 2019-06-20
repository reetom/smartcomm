import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container,} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
class CreateAccount extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.returnToHome = this.returnToHome.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    returnToHome(){
        let path = '/';
        this.props.history.push(path);
    }

    onSubmit(event){
        let path = '/signin';
        this.props.history.push(path);
    }
    render() {
        return(
            <div className="login-page-background">
            <Container>
              <Row>
                <SectionHeadingAndWhiteLine heading="Create an Account" color="white"/>
              </Row>
              <Row>
                  <Col sm={4}>
                  </Col>
                  <Col sm={4}>
                    <Form onSubmit = {this.onSubmit}> 
                        <Row>
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
                        <FormGroup>
                            <Label>Street Address</Label>
                            <Input type="text" name="streetAddress" id="streetAddress" placeholder="Enter Street Address" />
                        </FormGroup>
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
                        <FormGroup>
                            <Label>E-mail Address</Label>
                            <Input type="text" name="email" id="email" placeholder="Enter E-mail Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Passowrd</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter Password" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Confirm Passowrd</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Password Again" />
                        </FormGroup>               
                        <div className="align-left">
                          <Button color="primary" type="submit">Create Account</Button> <Button color="primary" onClick={this.returnToHome}>Cancel</Button>
                          </div>
                    </Form>
                  </Col>
                  <Col sm={4}>
                  </Col>
              </Row>
            </Container>
        </div>
        )
    }
}
export default CreateAccount;
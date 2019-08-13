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

        event.preventDefault();
        const data = new FormData(event.target);
        var fistName = data.get("firstName");
        var lastName = data.get("lastName");
        var streetAddress = data.get("streetAddress");
        var city = data.get("city");
        var state = data.get("state");
        var country = data.get("country");
        var email = data.get("email");
        var password = data.get("password");
        var confirmPassword = data.get("confirmPassword");
        var customersArray=[];
        var userAlreadyExists ="";
        //save all the user info into localstorage.
        var customersFromSession = JSON.parse(localStorage.getItem("Customers"));
        //Build the current user object.
        var userProfile = {"firstName":data.get('firstName'),
                            "lastName":data.get('lastName'),
                            "email": data.get('email'),
                            "streetAddress":data.get('streetAddress'),
                            "city":data.get('city'),
                            "state":data.get('state'),
                            "zipcode":data.get('zipcode'),
                            "country":data.get('country'),
                            "password": data.get('password'),
                            "confirmPassword": data.get('confirmPassword')

        };
        if (customersFromSession !== null){
            customersArray = customersFromSession.customersArray;
            if (customersArray !== null && customersArray.length>0){
                customersArray.map(userProfile =>{
                        console.log(userProfile.email);
                     if (userProfile.email === email){
                         userAlreadyExists = "true";
                         console.log("User Already Exist, please sign in or reset password");
                    }
                });  
            }
        }

        if (userAlreadyExists !== "true"){
            customersArray.push(userProfile);
            console.log("New User Created Successfully");
        }
        
        localStorage.setItem("Customers",JSON.stringify({customersArray}));
        console.log(JSON.parse(localStorage.getItem("Customers")));

        //Redirect user to the login page to sign in.
        let path = '/signin';
        this.props.history.push(path);
    }
    render() {
        return(
            <div className="login-page-background">
            <Container fluid>
                <Row>
                  <Col sm={12}>
                  <SectionHeadingAndWhiteLine heading="Create an Account" color="white"/>
                  </Col>
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
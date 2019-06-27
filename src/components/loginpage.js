import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container,} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import {Link} from 'react-router-dom';

//Regex to validate the email address.
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

//Validate for form errors.
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
};

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            passwrod:"",
            saveEmail:"",
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.toCreateAccountPage = this.toCreateAccountPage.bind(this);
    }

    onSubmit(event){
      event.preventDefault();
      const data = new FormData(event.target);  
      const email = data.get("email");
      const password = data.get("password");
      var applicationContext = { userProfile: {"email": "", firstName: "", lastName:""}
                                
                                };
      var isUserValid = "false";
      var customersArray=[];
      var customersFromSession = JSON.parse(localStorage.getItem("Customers"));
      // User User Profiles to validate the user.
      if (customersFromSession !== null){
        customersArray = customersFromSession.customersArray;
        if (customersArray !== null && customersArray.length>0){
            customersArray.map(userProfile =>{
                    console.log(userProfile.email);
                 if (userProfile.email === email && userProfile.password === password){
                    isUserValid = "true";
                     console.log("Login Successful");
                }
            });  
        }
    }

      //send the user back to home on successful login
      if (isUserValid === "true"){
        //Store the User in Application Context for the signed in user flow
        applicationContext.userProfile.email = email;
        localStorage.setItem("ApplicationContext",JSON.stringify(applicationContext));
        let path = '/myaccountlanding';
        this.props.history.push(path);
      }
      console.log(JSON.parse(localStorage.getItem("ApplicationContext")));
    }

    //send the user to create account page
    toCreateAccountPage(){
      let path = '/createaccount';
      this.props.history.push(path);
    }

    render() {
        const { formErrors } = this.state;
        
        return(
            <div className="login-page-background">
              <Container fluid>
                <Row>
                  <SectionHeadingAndWhiteLine heading="Sign-In or Create an Account" color="white"/>
                </Row>
                <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4}>
                      <Form onSubmit = {this.onSubmit}> 
                        <FormGroup>
                            <Label>E-mail Address</Label>
                            <Input type="text" name="email" id="email" placeholder="Enter E-mail Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Passowrd</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter Password" />
                        </FormGroup>
                                                      
                          <div className="align-left">
                            <Button color="primary" type="submit">Sign In</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
                <Row>
                  <div className="align-center">
                    <Link to="/restpassword">Forgot your password? click here to reset your password</Link>
                  </div>
                </Row>
                <Row>
                  <div className="one-em-spacing"/>
                  <div className="align-center">Or, Create an Account</div>
                  <div className="one-em-spacing"/>
                  <div className="align-center">
                            <Button color="primary" onClick={this.toCreateAccountPage}>Create Account</Button>
                  </div>
                </Row>

              </Container>
            
          </div>
                          
        );
    }
}
export default Login;
import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container,} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import {Link} from 'react-router-dom';


class TrackOrder extends Component {

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

      //send the user back to home on successful login
      let path = '/';
      this.props.history.push(path);
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
export default TrackOrder;
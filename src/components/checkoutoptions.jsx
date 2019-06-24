import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container,} from 'reactstrap';
import {Link} from 'react-router-dom';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';


class CheckoutOptions extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.checkout = this.checkout.bind(this);
    }


    checkout(){
        let path = '/checkoutpage';
        this.props.history.push(path);
    }

    render() {
        const { formErrors } = this.state;
        
        return(
          <div className="login-page-background">
          <Container fluid>
            <Row>
              <Col sm={12}>
                <SectionHeadingAndWhiteLine heading="Select checkout Option" color="white"/>
              </Col>
              </Row>
            <Row>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="align-center">
                    <Button color="primary" onClick={this.checkout}>Continue as Guest</Button>
                </div>
                <div className="one-em-spacing"/>
                <div className="one-em-spacing"/>
                <div className="one-em-spacing"/>
                <div className="align-center">
                  Or, Please Sign In
                </div>
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
                        <Button color="primary" disabled type="submit" onClick={this.checkout}>Sign In</Button>
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
                        <Button color="primary" disabled onClick={this.toCreateAccountPage}>Create Account</Button>
              </div>
            </Row>
        </Container>
      </div>
      )
    }
}
export default CheckoutOptions;
import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container,} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import {Link} from 'react-router-dom';


class TrackOrder extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:""
        }
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

    buildOrderHistory(){

    }

    render() {
        const { formErrors } = this.state;
        
        return(
            <div className="login-page-background">
              <Container fluid>
                <Row>
                  <Col sm={12}>
                    <SectionHeadingAndWhiteLine heading="Track You Order Status" color="white"/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="align-center">
                      <Form inline>
                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Email Address</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                          </FormGroup>
                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Order #</Label>
                            <Input type="text" name="orderNumber" id="orderNumber" placeholder="XXXX-XXXXXX-XXXX" /> <Button color="primary">Track</Button>
                          </FormGroup>
                          
                        </Form>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                      <Col sm={12}>

                      </Col>
                  </Row>


              </Container>
            
          </div>
                          
        );
    }
}
export default TrackOrder;
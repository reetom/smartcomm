import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

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

class CheckoutOptions extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            passwrod:"",
            saveEmail:"",
        }
        this.checkout = this.checkout.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 8? "minimum 8 characaters required" : "";
            break;
          default:
            break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    checkout(){
        let path = '/checkoutpage';
        this.props.history.push(path);
    }
    render() {
        const { formErrors } = this.state;
        
        return(
            <div>
                <SectionHeadingAndWhiteLine heading="Checkout" color="white"/>
                <div className="login-div-container">
                    <div></div>
                    <div className="login-form">
                    <div className="guest-checkout-button">                    
                        <Button class="payment-buttons" raised onClick={this.checkout}>Guest Checkout</Button>
                    </div>
                    <div className="or-div"> Or, Please Sign-in</div>

                        <Form onSubmit={this.handleSubmit} noValidate>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" onChange={this.handleChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Save email"/>
                            </Form.Group>
                            <div>
                                <Link to="/createaccount"> Not Registered? Create Account</Link>
                            </div>
                            <div className="login-submit-button">
                              <Button variant="primary" type="submit">Submit</Button>
                            </div>

                        </Form>
                    </div>
                    <div></div>
            </div>
            
        </div>)
    }
}
export default CheckoutOptions;
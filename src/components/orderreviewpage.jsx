import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

const lineBreak = "<br/>";
class OrderReviewPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            //empty for now..
        }
        this.toOrderConfirmationPage = this.toOrderConfirmationPage.bind(this);
    }

    toOrderConfirmationPage(){
        let path = '/orderconfirmationpage';
        this.props.history.push(path);
    }

    render() {
        
        return(
            <div className="page-background">
                <div className="order-submit-button">
                        <Button variant="primary" type="submit" onClick={this.toOrderConfirmationPage}>Place Order</Button>
                </div>
                <SectionHeadingAndWhiteLine heading="Review Your Order and Submit" color="null"/>
                <br/>
                <SectionHeadingAndWhiteLine heading="Cart Items and Total" color="white"/>
                <div className="products-total">
                </div>
                <SectionHeadingAndWhiteLine heading="Shipping and Billing Details" color="white"/>
                <div className="shipping-billing-address">
                    <div className="shipping-address-review">
                        <h3>Shipping Address</h3>
                        <h5>Reetom Hazarika </h5>
                        <h5>990 S Dutton Dr.</h5>
                        <h5>Mountain House, CA -95391</h5>  
                    </div>
                        <div className="billing-address-review">
                        <h3>Billing Address</h3>
                        <h5>Reetom Hazarika </h5>
                        <h5>990 S Dutton Dr.</h5>
                        <h5>Mountain House, CA -95391</h5>  
                    </div>
                </div>
                <SectionHeadingAndWhiteLine heading="Gift Cards" color="white"/>
                <div className="gift-card-payment">
                    
                </div>
                <SectionHeadingAndWhiteLine heading="Payment Options" color="white"/>
                <div className="payment-options">
                </div>
                <div className="order-submit-button">
                    <Button variant="primary" type="submit" onClick={this.toOrderConfirmationPage}>Place Order</Button>
                </div>

            </div>

            
        )
    }
}
export default OrderReviewPage;
import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

const lineBreak = "<br/>";
class OrderReviewPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            productRowsToDisplay: "",
            cartTotalToDisplay: "",
        }
        this.toOrderConfirmationPage = this.toOrderConfirmationPage.bind(this);
        this.buildProductRows = this.buildProductRows.bind(this);
    }

    toOrderConfirmationPage(){
        let path = '/orderconfirmationpage';
        this.props.history.push(path);
    }

    buildProductRows(){
        const cartObject = JSON.parse(localStorage.getItem("cart"));
        const cartItems = cartObject.cartItems;

        var productRowsToDisplay = cartItems.map(cartItem =>
                            <div className="review-cart-prod">
                                <Row>
                                    <Col sm={4}>
                                        <div className="image-center">
                                            <img
                                                src={cartItem.product.imageURL}
                                                alt={cartItem.product.imageName}
                                                className="review-image"
                                                />                                   
                                        </div>
                                    </Col>
                                    <Col sm={8}>
                                        <div>Name: {cartItem.product.productName}</div>
                                        <div>Price: ${cartItem.product.price}    $<del>3000</del></div>
                                        <div>Quantity: {cartItem.quantity}</div>
                                        <div>SUBTOTAL: ${cartItem.product.price * cartItem.quantity}</div>
                                    </Col>
                                </Row>
                            </div>
                    );
        this.setState({productRowsToDisplay:productRowsToDisplay});
    }
    

    componentDidMount(){
        this.buildProductRows();
    }
    render() {
        const {productRowsToDisplay} = this.state;
        const cartObject = JSON.parse(localStorage.getItem("cart"));
        const shippingAddress = cartObject.shippingAddress;
        const billingAddress = cartObject.billingAddress;
        const shippingMethodAndPrice = cartObject.shippingMethodAndPrice;
        const cartTotal = cartObject.cartTotal;
        var grandTotal = (parseFloat(cartTotal.grandTotal) + parseFloat(shippingMethodAndPrice.shippingPrice)).toString();

        return(
            <div className="page-background">
                <Container>
                    <Row>
                        <div className="order-submit-button">
                                <Button color="primary" type="submit" onClick={this.toOrderConfirmationPage}>Place Order</Button>
                        </div>
                    </Row>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Review Your Cart Items" color="null"/>
                        <div>
                            {productRowsToDisplay}
                        </div>

                    </Row>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Shipping and Billing Details" color="white"/>
                    </Row>
                    <Row>
                        <div className="shipping-billing-address">
                            <Col>
                                <div className="shipping-address-review">
                                    <h3>Review Shipping Address</h3>
                                    <h5>{shippingAddress.firstName} {shippingAddress.lastName}</h5>
                                    <h5>{shippingAddress.streetAddress}</h5>
                                    <h5>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.zipcode}</h5>  
                                </div>
                            </Col>
                            <Col>
                                <div className="billing-address-review">
                                    <h3>Review Billing Address</h3>
                                    <h5>{billingAddress.firstName} {billingAddress.lastName}</h5>
                                    <h5>{billingAddress.streetAddress}</h5>
                                    <h5>{billingAddress.city}, {billingAddress.state} - {billingAddress.zipcode}</h5> 
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Review Shipping Method" color="white"/>
                        <div className="review-shipping-method">
                            <Col sm={6}>
                              <div className="align-right">
                                    <h5>Shipping Method :</h5>
                                    <h5>Shipping Price :</h5>
                                    <h5>Expected Delivery :</h5>
                              </div>
                            </Col>
                            <Col sm={6}>
                                <div className="align-left">
                                        <h5>{shippingMethodAndPrice.shippingMethod}</h5>
                                        <h5>${shippingMethodAndPrice.shippingPrice}</h5>
                                        <h5>{shippingMethodAndPrice.expectedDelivery}</h5>
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Grand Total" color="white"/>
                        <div className="review-shipping-method">
                            <Col sm={6}>
                              <div className="align-right">
                                    <h5>Subtotal :</h5>
                                    <h5>Tax :</h5>
                                    <h5>Shipping Price :</h5>
                                    <h5>Discount :</h5>
                                    <h5>Grand Total :</h5>
                              </div>
                            </Col>
                            <Col sm={6}>
                                <div className="align-left">
                                        <h5>${cartTotal.subtotal}</h5>
                                        <h5>${cartTotal.tax}</h5>
                                        <h5>${shippingMethodAndPrice.shippingPrice}</h5>
                                        <h5>${cartTotal.discount}</h5>
                                        <h5>${grandTotal}</h5>
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Enter Gift Cards" color="white"/>
                        <div className="gift-card-payment">
                            
                        </div>
                    </Row>
                    <Row>
                        <SectionHeadingAndWhiteLine heading="Enter Payment Details" color="white"/>
                        <div className="payment-options">
                        </div>
                    </Row>
                    <Row>
                        <div className="order-submit-button">
                            <Button color="primary" type="submit" onClick={this.toOrderConfirmationPage}>Place Order</Button>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default OrderReviewPage;
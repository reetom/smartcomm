import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container,} from 'reactstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import {Link} from 'react-router-dom';


class TrackOrder extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            orderConfirmationNumber:"",
            orderDetailsArray:[<div className="filler-div"/>]
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.buildOrderDetails = this.buildOrderDetails.bind(this);
    }

    buildOrderDetails(orderConfirmationNumber, email){
          //------Get Cart Objects-------//
          const ordersFromSession = JSON.parse(localStorage.getItem('AllOrders'));
          console.log("ordersFromSession " + {ordersFromSession});
          var status = "";
          var orderItem =[];
          var orderDetailsArray = [];
          var productRowToDisplay="";
          if (ordersFromSession !== null){
              orderItem = ordersFromSession.orderArrayToUpdate;
              if (orderItem !=null && orderItem.length > 0){
                    orderItem.map( (order) => {
                    //If the conf number entered by user matches with one from the session then show the order details
                    if(order.confirmationNumber === orderConfirmationNumber){
                      console.log( order.confirmationNumber);
                      console.log( order.cart);
                      console.log(order.orderDateAndTime);
                      const cart = order.cart;
                      const cartItems = cart.cartItems;
                      orderDetailsArray.push(
                                                // Build display here when order has been found
                                                <div>
                                                <div className="one-em-spacing"/>
                                                <div className="one-em-spacing"/>
                                                <div className="one-em-spacing"/>
                                                <SectionHeadingAndWhiteLine heading="Your Order Details" color="white"/>
                                                <Row>
                                                  <Col sm={4}>
                                                    <div className="align-left">
                                                      <h6>Order Number : {order.confirmationNumber}</h6>
                                                    </div>
                                                  </Col>
                                                  <Col sm={4}>
                                                    <div className="align-left">
                                                        <h6>Date :  {order.orderDateAndTime}</h6>
                                                    </div>
                                                  </Col>
                                                  <Col sm={4}>
                                                      <div className="align-right">
                                                        <Button color="primary"> Track Shippment</Button > 
                                                      </div>
                                                  </Col>
                                                </Row>
                                                <Row>
                                                  <Col sm={4}>
                                                    <div className="align-left">
                                                      <h6>Order Status : {order.orderStatus}</h6>
                                                    </div>
                                                  </Col>
                                                  <Col sm={4}>
                                                      <div className="align-left">
                                                        <h6>Order Total : {cart.cartTotal.grandTotal}</h6>
                                                      </div>
                        
                                                  </Col>
                                                  <Col sm={4}>
                                                    <div className="align-right">
                                                      <Button color="primary"> Cancel Order</Button > 
                                                    </div>
                                                  </Col>
                                                </Row>
                                              </div>
                      );

                      productRowToDisplay=  cartItems.map( cartItem =>

                        <div>
                        <div className="one-em-spacing"/>
                        <Row>

                          <Col sm={4}>
                              <div className="image-center">
                                  <Link to={{
                                      pathname: '/pdp',
                                        state: {
                                              productToDisplay: cartItem.product
                                              }
                                              }}>
                                    <img
                                        src={cartItem.product.imageURL}
                                        alt={cartItem.product.imageName}
                                        className="review-image"
                                    /> 
                                  </Link>                                  
                              </div>
                          </Col>
                          <Col sm={8}>
                              <div className="div-display-block-fixed-height">
                                <div className="padding-left">
                                  <div className="align-left"><strong>Name:</strong> {cartItem.product.productName}</div>
                                  <div className="align-left"><strong>Quantity:</strong>  {cartItem.quantity}   </div>
                                  <div className="align-left"><strong>Price:</strong> ${cartItem.product.price}  $<del>3000</del></div>
                                  <div className="align-left"><strong>Subtotal:</strong>  ${cartItem.product.price * cartItem.quantity}</div>
                                </div>
                               </div>
                          </Col>
                      </Row>
                      </div>
                      
                        );

                        
                      }
                  });
              }
              orderDetailsArray.push(productRowToDisplay);
            }
            else {
            console.log("order not found")
            orderDetailsArray.push(
            <Row>
              <Col sm={12}>
                <div className="align-center">
                  <h3>No orders were found matching the confirmation number: {orderConfirmationNumber}</h3>
              </div>
              <div className="filler-div"/>
              </Col>  
            </Row>
          );
          }
        this.setState({orderDetailsArray:orderDetailsArray});
    }

    onSubmit(event){
      event.preventDefault();
      //Get the user inputs
      const data = new FormData(event.target);
      const orderConfirmationNumber = data.get('orderNumber');
      const email = data.get('email');
      this.buildOrderDetails(orderConfirmationNumber, email);
      //Update state with user inputs
      this.setState({email:email});
      this.setState({orderConfirmationNumber:orderConfirmationNumber});
    }

    render() {
        const { orderDetailsArray} = this.state;
        return(
            <div className="order-tracking-page-background">
              <Container fluid>
                <Row>
                  <Col sm={12}>
                    <SectionHeadingAndWhiteLine heading="Track You Order Status" color="white"/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="align-center">
                      <Form inline onSubmit = {this.onSubmit}>
                          <FormGroup >
                            <Label >Email Address</Label>
                            <Input type="email" name="email" id="email" placeholder="someone@something.com" />
                          </FormGroup>
                          <FormGroup >
                            <Label >Order #</Label>
                            <Input type="text" name="orderNumber" id="orderNumber" placeholder="XXXX-XXXXXX-XXXX" /> 
                          </FormGroup>
                          <Button color="primary" type="submit">Track Order</Button>
                        </Form>
                    </div>
                    </Col>
                  </Row>
                    {orderDetailsArray}
              </Container>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
              <div className="one-em-spacing"/>
          </div>
                          
        );
    }
}
export default TrackOrder;
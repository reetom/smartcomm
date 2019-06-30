import React, {Component} from 'react';
import {Button, Table, Card, CardBody, UncontrolledCollapse, Row, Col} from 'reactstrap';

const Col1 = {
    width: '20%',
    textAlign: 'center'
  };
  const Col2 = {
    width: '80%',
    textAlign: 'left'
  };

class MyOrders extends Component {

    constructor(props){
        super(props);
        this.state={
            orderStringToReturn:""
        }

        this.buildOrderHistory = this.buildOrderHistory.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.buildProductRows = this.buildProductRows.bind(this);
    }

    //This function builds the inner product rows inside an order.
    buildProductRows(cartItems){
        var productRowArray = [];

        cartItems.map( cartItem => {
            productRowArray.push(
                <Row>
                    <Col sm={3}>
                        <div className="align-center">
                            <img src={cartItem.product.imageURL} width="100" height="100" alt="" />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="align-left">
                            <div>Product Name: {cartItem.product.productName}</div>
                            <div>Quantity: {cartItem.quantity}</div>
                            <div>color: {cartItem.color}</div>
                            <div>subtotal: </div>
                        </div>
                    </Col>
                </Row>
            );
        });
        return productRowArray;
    }

    //This fuction builds the order accordion for all the orders for the user.
    buildOrderHistory(){
        const ordersFromSession = JSON.parse(localStorage.getItem('AllOrders'));    
        var orderStringToReturn =[];
        var orderItem =[];
        var cart="";
        var cartTotal="";
        var cartItems="";
        if (ordersFromSession !== null){
            orderItem = ordersFromSession.orderArrayToUpdate;
            if (orderItem !=null && orderItem.length > 0){
                orderItem.map( (order) => 
                    {   
                        cart = order.cart;
                        cartTotal = cart.cartTotal;
                        cartItems = cart.cartItems;
                        //The following two lines are needed to generate a unique ID for each button else every button will 
                        //have the same ID and toggler and when the user clicks on one button all accordions will open/close.
                        var buttonID = "toggler".concat(order.confirmationNumber);
                        var hashToggler = "#".concat(buttonID);
                        orderStringToReturn.push(
                            <div>
                                <Button block color="primary" id={buttonID} style={{ marginBottom: '1rem' }}>
                                <Row>
                                    <Col sm={4}>
                                        Order Number: {order.confirmationNumber}
                                    </Col>
                                    <Col sm={4}>
                                        Order Date: {order.orderDateAndTime}
                                    </Col>
                                    <Col sm={4}>
                                        Status: {order.orderStatus}
                                    </Col>
                                </Row>
                                </Button>
                                
                                <UncontrolledCollapse toggler={hashToggler}>
                                <Card>
                                    <CardBody>
                                    <Row>
                                        <Col sm={9}>
                                            {this.buildProductRows(cartItems)}
                                            <div className="one-em-spacing"/>
                                        </Col>
                                        <Col sm={3}>
                                            <div className="align-right">
                                                <Button block color="primary"> Track Package</Button>
                                            </div>
                                            <div className="one-em-spacing"/>
                                            <div className="align-right">
                                                <Button block color="primary">Cancel Order</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                                </Card>
                                </UncontrolledCollapse>
                            </div>
                        );
                    }
                );
            }
        }
        this.setState({orderStringToReturn:orderStringToReturn});
    }

    cancelOrder(){
        console.log("Order Canceled");
    }

    componentDidMount(){
        this.buildOrderHistory();
    }
    render() {
        const {orderStringToReturn} = this.state;

        return(
            <div>
                {orderStringToReturn}
            </div>
        )
    }
}
export default MyOrders;
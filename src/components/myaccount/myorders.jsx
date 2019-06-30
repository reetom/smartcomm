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
    }

    buildOrderHistory(){
        const ordersFromSession = JSON.parse(localStorage.getItem('AllOrders'));

        var orderStringToReturn =[];
        orderStringToReturn.push("Hello");
        var orderItem =[];
      /*  if (ordersFromSession !== null){
            orderItem = ordersFromSession.orderArrayToUpdate;
            if (orderItem !=null && orderItem.length > 0){
                orderItem.map( (order) => 
                    {   
                        orderStringToReturn.push(
                            <div>
                                {order.confirmationNumber}
                            </div>
                        );
                    }
                );
            }
        }*/

        this.setState({orderStringToReturn:orderStringToReturn});
    }

    cancelOrder(){
        console.log("Order Canceled");
    }

    componentDidMount(){
        this.buildOrderHistory();
    }
    render() {
        const {orderStringToReturn} = this.setState;

        return(
            <div>
                {orderStringToReturn}
            </div>
        )
    }
}
export default MyOrders;
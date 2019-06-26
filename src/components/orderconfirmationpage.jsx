import React, {Component} from 'react';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

class OrderConfirmationPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            confirmationNumber:"",
            orderConfirmationTime:""
        }
        this.storeConfirmationNumber = this.storeConfirmationNumber.bind(this);
    }
    //This function does the following:
    //Generate the confirmation number, you can separate this out later.
    //Gets the order confirmation date and time
    //Updates localstorage with the order confirmation number, date/time and the cart as one order.
    storeConfirmationNumber(){
        const orderObjectFromLocalstoreage="";
        var orderArrayToUpdate =[];
        //Get the cart object from session
        const cart = JSON.parse(localStorage.getItem("cart"));
        //Generate the confirmation number for the current order
        const confirmationNumber = orderNumber();
        //Capture the order date and time for audit purpose
        const orderConfirmationTime = orderDateAndTime();
        this.setState({confirmationNumber: confirmationNumber});
        //This is the current order.
        var order = { "cart":cart,
                      "confirmationNumber":confirmationNumber,
                      "orderDateAndTime": orderConfirmationTime,
                      "orderStatus" :"Pending"
        }
        orderArrayToUpdate.push(order);

        //Do the following at the end so that the new item is always on index 0 in the array.
        //Get the order array from localstorate and add the new order to it. Track order will search the order in this object.
        const ordersFromSession = JSON.parse(localStorage.getItem('AllOrders'));
        console.log("ordersFromSession " + {ordersFromSession});

        var orderItem =[];
        if (ordersFromSession !== null){
            orderItem = ordersFromSession.orderArrayToUpdate;
            if (orderItem !=null && orderItem.length > 0){
                orderItem.map( (order) => orderArrayToUpdate.push(order));
            }
        }
        localStorage.setItem("AllOrders",JSON.stringify({orderArrayToUpdate}));  
    }

    componentDidMount(){
        //Store the confirmation number in local file for now...
        this.storeConfirmationNumber();
        //Empty unwanted data from localstorage.
        cleanupLocalStorage();
    }

    render() {
        const {confirmationNumber} = this.state;
        return(
            <div className="page-background">
                <div className="order-conf-section">
                    <h3>Thank you for shopping with SmartComm.</h3>
                    <h3>Your confirmation number is : {confirmationNumber}</h3>
                </div>
            </div>
        )
    }
}

function orderNumber() {
    let now = Date.now().toString() // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)
    // format
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }

function cleanupLocalStorage(){
        localStorage.removeItem("cartProducts");
        //This will clear the main cart object.
        localStorage.removeItem("cart");
}

function orderDateAndTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return(dateTime);
}
export default OrderConfirmationPage;
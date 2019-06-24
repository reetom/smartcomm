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

    storeConfirmationNumber(){
        const cart = JSON.parse(localStorage.getItem("cart"));
        const confirmationNumber = orderNumber();
        const orderConfirmationTime = orderDateAndTime();
        this.setState({confirmationNumber: confirmationNumber});
        var order = { "cart":cart,
                        "confirmationNumber":confirmationNumber,
                        "orderDateAndTime": orderConfirmationTime
        }
        localStorage.setItem("OrderHistory",order);
        console.log("order details :" + JSON.stringify(order));
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
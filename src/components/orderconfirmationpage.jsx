import React, {Component} from 'react';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

class OrderConfirmationPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            //empty for now..
        }
        this.storeConfirmationNumber = this.storeConfirmationNumber.bind(this);
    }



    storeConfirmationNumber(){

        
    }
    componentDidMount(){
        //Store the confirmation number in local file for now...
        this.storeConfirmationNumber();
        //Empty the localstorage.
        localStorage.clear();
    }

    render() {
        
        return(
            <div className="page-background">
                <div className="order-conf-section">
                    <h3>Thank you for shopping with SmartComm.</h3>
                    <h3>Your confirmation number is : {orderNumber()}</h3>
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
export default OrderConfirmationPage;
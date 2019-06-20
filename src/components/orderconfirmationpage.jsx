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
                    <h3>Your confirmation number is : #YOU-ARE-TOTALLY-FUCKED!</h3>
                </div>
            </div>
        )
    }
}
export default OrderConfirmationPage;
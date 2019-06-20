import React, {Component} from 'react';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';

class OrderConfirmationPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            //empty for now..
        }
    }
    componentDidMount(){
        //Empty the localstorage.
        localStorage.clear();
    }

    render() {
        
        return(
            <div className="page-background">
                <div className="order-conf-section">
                    <h3>Thank you for shopping with SmartComm.</h3>
                    <h3>Your confirmation number is : YOUR-ARE-TOTALLY-FUCKED!</h3>
                </div>
            </div>
        )
    }
}
export default OrderConfirmationPage;
import React, {Component} from 'react';
import SectionHeadingAndWhiteLine from './../../components/complibrary/sectionheadingandwhiteline';
import {Button, Row, Col, Form, FormGroup, Label, Input, DropdownItem, ButtonDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

class Payments extends Component {
    constructor(props){
        super(props);
        this.state={
            enterPaymentArray:"",
            showPaymentsArray:"",
            cardTypeDropdownOpen: false,
            cardTypeDropDownValue:"Select Card Type"
        }
        this.showPayments = this.showPayments.bind(this);
        this.enterPayment = this.enterPayment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deletePayment = this.deletePayment.bind(this);
        this.toggleCardType = this.toggleCardType.bind(this);
        this.changeCardTypeValue = this.changeCardTypeValue.bind(this);
    }

    //Toggle for the card Type dorpdown
    toggleCardType() {
        this.setState({
            cardTypeDropdownOpen: !this.state.cardTypeDropdownOpen
        });
      }
      //Dropdown value change
      changeCardTypeValue(e) {
        this.setState({cardTypeDropDownValue: e.currentTarget.textContent});
      }
    onSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);  
        var paymentArray =[];
        var paymentsFromSession = JSON.parse(localStorage.getItem("Payments"));
        if(paymentsFromSession !== null) {
            paymentsFromSession.map(payment =>{paymentArray.push(payment)});
        }
        paymentArray.push({"nickName": data.get("nickName"),
                            "nameOnCard": data.get("nameOnCard"),
                            "expiryDate": data.get("expiryDate"),
                            "cardNumber": data.get("cardNumber"),
                            "cardType": data.get("cardType")
                        }); 
        localStorage.setItem("Payments", JSON.stringify(paymentArray));
        this.showPayments();
    }

    enterPayment(){
        var enterPaymentArray =[];

        enterPaymentArray.push(
            <Row>
                <Form onSubmit = {this.onSubmit}>
                <Col sm={12}>
                    <SectionHeadingAndWhiteLine heading="Save New Payment Method" color="white"/>
                </Col>
                <Col sm={9}>
                    <div className="display-block-no-margin">
                    
                        <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Name on Card</Label>
                                        <Input type="text" name="nameOnCard" id="nameOnCard" placeholder="Name on Card" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Nick Name</Label>
                                        <Input type="text" name="nickName" id="nickName" placeholder="Enter Nick Name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <div className="one-em-spacing">
                                        <ButtonDropdown  direction="right" isOpen={this.state.cardTypeDropdownOpen} toggle={this.toggleCardType}>
                                                <DropdownToggle type="something" caret color="primary">{this.state.cardTypeDropDownValue}</DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={this.changeCardTypeValue}><div className="quantity-dropdown-text">Visa</div></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem onClick={this.changeCardTypeValue}><div className="quantity-dropdown-text">Master Card</div></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem onClick={this.changeCardTypeValue}><div className="quantity-dropdown-text">American Express</div></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem onClick={this.changeCardTypeValue}><div className="quantity-dropdown-text">Discover</div></DropdownItem>
                                                    </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>

                                </Col>
                                <Col sm={4}>
                                    <FormGroup>
                                        <Label>Card Number</Label>
                                        <Input type="text" name="cardNumber" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" />
                                    </FormGroup>
                                </Col>
                                <Col sm={4}>
                                     <FormGroup>
                                        <Label>Card Expiry Date</Label>
                                        <Input type="text" name="expiryDate" id="expiryDate" placeholder="MM/YY" />
                                    </FormGroup>
                                </Col>
                            </Row>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <div className="one-em-spacing"/>
                        <Button block color="primary">Save</Button>
                    </div>
                 </Col>
                 </Form>
            </Row>
        );
        this.setState({enterPaymentArray:enterPaymentArray});
    }

    showPayments(){
        var showPaymentsArray= [];
        var paymentsFromSession = JSON.parse(localStorage.getItem("Payments"));
        console.log(paymentsFromSession);
            if (paymentsFromSession !== null && paymentsFromSession.length>0){
                showPaymentsArray.push(
                    <Row>
                        <Col sm={12}>
                            <SectionHeadingAndWhiteLine heading="Saved Payments" color="white"/>
                        </Col>
                    </Row>
                );
                paymentsFromSession.map( payment =>{
                    showPaymentsArray.push(
                        <div>
                            <Row>
                                <Col sm={9}>
                                    <div className="display-block-no-margin">
                                        <Row>
                                            <Col sm={6}>
                                                <div className="one-em-spacing"/>
                                                <h5>Nick Name :</h5>
                                                <h5>Name on Card :</h5>
                                                <h5>Card Type :</h5>
                                                <h5>Card Number :</h5>
                                                <h5>Expiry Date :</h5>
                                                <div className="one-em-spacing"/>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="one-em-spacing"/>
                                                <h5>{payment.nickName}</h5>
                                                <h5>{payment.nameOnCard}</h5>
                                                <h5>Visa</h5>
                                                <h5>{payment.cardNumber}</h5>
                                                <h5>{payment.expiryDate}</h5>
                                                <div className="one-em-spacing"/>
                                            </Col>
                                        </Row>


                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div>
                                        <div className="one-em-spacing"/>
                                        <Button block raised color="warning" type="button" onClick={() => this.deletePayment(payment)}> Delete </Button>
                                    </div>
                                </Col>
                            </Row>
                            <div className="one-em-spacing"/>
                        </div>

                    );
                }

                );

            }
        this.setState({showPaymentsArray:showPaymentsArray})
    }

    deletePayment(paymentToDelete){
        
        var showPaymentsArray= [];
        var paymentsFromSession = JSON.parse(localStorage.getItem("Payments"));

        if (paymentsFromSession !== null){
            paymentsFromSession.map(payment => {
                if (payment.cardNumber === paymentToDelete.cardNumber){
                        console.log("deleting saved card");
                    } else {
                        showPaymentsArray.push(payment);
                    }
            });

        }
        localStorage.setItem("Payments", JSON.stringify(showPaymentsArray));
        this.showPayments();
    }

    componentDidMount(){
        this.enterPayment();
        this.showPayments();
    }

    render() {
        const {showPaymentsArray, enterPaymentArray} = this.state;
        return(
            <div>
                {enterPaymentArray}
                {showPaymentsArray}
            </div>
        )
    }
}
export default Payments;
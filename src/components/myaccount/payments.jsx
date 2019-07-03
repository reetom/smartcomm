import React, {Component} from 'react';
import SectionHeadingAndWhiteLine from './../../components/complibrary/sectionheadingandwhiteline';
import {Button, Row, Col, Form, FormGroup, Label, Input, DropdownItem, ButtonDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

class Payments extends Component {
    constructor(props){
        super(props);
        this.state={
            enterAddressArray:"",
            showAddressesArray:"",
            cardTypeDropdownOpen: false,
            cardTypeDropDownValue:"Select Card Type"
        }
        this.showAddresses = this.showAddresses.bind(this);
        this.enterAddress = this.enterAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
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
        var addressArray =[];
        var addressesFromSession = JSON.parse(localStorage.getItem("Addresses"));
        if(addressesFromSession !== null) {
            addressesFromSession.map(address =>{addressArray.push(address)});
        }
        addressArray.push({"streetAddress": data.get("streetAddress"),
                            "city": data.get("city"),
                            "state": data.get("state"),
                            "zipcode": data.get("zipcode"),
                            "country": data.get("country")
                        }); 
        localStorage.setItem("Addresses", JSON.stringify(addressArray));
        this.showAddresses();
    }

    enterAddress(){
        var enterAddressArray =[];

        enterAddressArray.push(
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
                                        <ButtonDropdown direction="right" isOpen={this.state.cardTypeDropdownOpen} toggle={this.toggleCardType}>
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
                                        <Input type="text" name="state" id="state" placeholder="XXXX-XXXX-XXXX-XXXX" />
                                    </FormGroup>
                                </Col>
                                <Col sm={4}>
                                     <FormGroup>
                                        <Label>Card Expiry Date</Label>
                                        <Input type="text" name="state" id="state" placeholder="MM/YY" />
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
        this.setState({enterAddressArray:enterAddressArray});
    }

    showAddresses(){
        var showAddressesArray= [];
        var addressesFromSession = JSON.parse(localStorage.getItem("Addresses"));
        console.log(addressesFromSession);
            if (addressesFromSession !== null && addressesFromSession.length>0){
                showAddressesArray.push(
                    <Row>
                        <Col sm={12}>
                            <SectionHeadingAndWhiteLine heading="Saved Addresses" color="white"/>
                        </Col>
                    </Row>
                );
                addressesFromSession.map( address =>{
                    showAddressesArray.push(
                        <div>
                            <Row>
                                <Col sm={9}>
                                    <div className="display-block-no-margin">
                                        <div className="one-em-spacing"/>
                                        <h5>{address.streetAddress}</h5>
                                        <h5>{address.city} {address.state}-{address.zipcode}</h5>
                                        <h5>{address.country}</h5>
                                        <div className="one-em-spacing"/>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div>
                                        <div className="one-em-spacing"/>
                                        <Button block raised color="warning" type="button" onClick={() => this.deleteAddress(address)}> Delete </Button>
                                    </div>
                                </Col>
                            </Row>
                            <div className="one-em-spacing"/>
                        </div>

                    );
                }

                );

            }
        this.setState({showAddressesArray:showAddressesArray})
    }

    deleteAddress(addressToDelete){
        
        var showAddressesArray= [];
        var addressesFromSession = JSON.parse(localStorage.getItem("Addresses"));

        if (addressesFromSession !== null){
            addressesFromSession.map(address => {
                if (address.streetAddress === addressToDelete.streetAddress &&
                    address.city === addressToDelete.city &&
                    address.state === addressToDelete.state &&
                    address.zipcode === addressToDelete.zipcode &&
                    address.country === address.country){
                        console.log("deleting saved address");
                    } else {
                        showAddressesArray.push(address);
                    }
            });

        }
        localStorage.setItem("Addresses", JSON.stringify(showAddressesArray));
        this.showAddresses();
    }

    componentDidMount(){
        this.enterAddress();
        this.showAddresses();
    }

    render() {
        const {showAddressesArray, enterAddressArray} = this.state;
        return(
            <div>
                {enterAddressArray}
                {showAddressesArray}
            </div>
        )
    }
}
export default Payments;
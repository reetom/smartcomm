import React, {Component} from 'react';
import SectionHeadingAndWhiteLine from './../../components/complibrary/sectionheadingandwhiteline';
import {Button, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';

class Addresses extends Component {
    constructor(props){
        super(props);
        this.state={
            enterAddressArray:"",
            showAddressesArray:""
        }
        this.showAddresses = this.showAddresses.bind(this);
        this.enterAddress = this.enterAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
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
                            "country": data.get("country"),
                            "nickName": data.get("nickName")
                        }); 
        localStorage.setItem("Addresses", JSON.stringify(addressArray));
        this.showAddresses();
        // Clear the form here...
    }

    enterAddress(){
        var enterAddressArray =[];

        enterAddressArray.push(
            <Row>
                <Form onSubmit = {this.onSubmit}>
                <Col sm={12}>
                    <SectionHeadingAndWhiteLine heading="Save New Address" color="white"/>
                </Col>
                <Col sm={9}>
                    <div className="display-block-no-margin">
                    
                        <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Nick Name</Label>
                                        <Input type="text" name="nickName" id="nickName" placeholder="Enter Nick Name" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Street Address</Label>
                                        <Input type="text" name="streetAddress" id="streetAddress" placeholder="Enter Street Address" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>City</Label>
                                        <Input type="text" name="city" id="city" placeholder="Enter City" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>State</Label>
                                        <Input type="text" name="state" id="state" placeholder="Enter State" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Zipcode</Label>
                                        <Input type="text" name="zipcode" id="zipcode" placeholder="Enter Zipcode" />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label>Country</Label>
                                        <Input type="text" name="country" id="country" placeholder="Enter Country Code" />
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
                                        <Row>
                                        
                                            <Col sm={3}>
                                                <div className="align-right">
                                                    <div className="one-em-spacing"/>
                                                    <h5>Nick Name :</h5>
                                                    <h5>Street Address :</h5>
                                                    <h5>City/State/Zip :</h5>
                                                    <h5>Country :</h5>
                                                    <div className="one-em-spacing"/>
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                    <div className="one-em-spacing"/>
                                                    <h5>{address.nickName}</h5>
                                                    <h5>{address.streetAddress}</h5>
                                                    <h5>{address.city} {address.state}-{address.zipcode}</h5>
                                                    <h5>{address.country}</h5>
                                                    <div className="one-em-spacing"/>
                                            </Col>
                                        
                                        </Row>
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
export default Addresses;
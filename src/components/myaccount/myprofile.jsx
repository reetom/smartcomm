import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profileStringTODisplay:""
        }
        this.buildProfile = this.buildProfile.bind(this);
    }

    buildProfile(){
        var profileStringTODisplay =[];

        profileStringTODisplay.push(

            <Row>
                <Col sm={3}>
                    <div className="align-center">
                        <img src="https://ehroplar.sirv.com/Images/smartcomm/placeholders/profile_pic_placeholder.png" width="216" height="233" alt="" />
                        <Button color="primary"> Change</Button>
                    </div>

                </Col>
                <Col sm={9}>
                    <Row>
                        <Col sm={3}>
                            <div className="align-right"> 
                                <h5>Name:</h5>
                                <h5>Email:</h5>
                                <h5>Phone:</h5>
                                <h5>Address:</h5>
                            </div>

                        </Col>
                        <Col sm={6}>
                            <h5>Reetom Hazarika</h5>
                            <h5>reetom@gmail.com</h5>
                            <h5>510-509-8439</h5>
                            <h5> 990 S Dutton Dr.</h5>
                            <h5> Mountain House CA-95391</h5>
                        </Col>
                        <Col sm={3}>
                            <div className="align-right">
                                <Button color="primary"> Edit Profile</Button>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>

        );
        this.setState({profileStringTODisplay:profileStringTODisplay})
    }

    componentDidMount(){
        this.buildProfile();

    }

    render() {
        var {profileStringTODisplay} = this.state;
        return(
            <div><h1>{profileStringTODisplay}</h1></div>
        )
    }
}
export default MyProfile;
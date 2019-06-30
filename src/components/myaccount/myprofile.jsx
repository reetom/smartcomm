import React, {Component} from 'react';

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profileStringTODisplay:"My Profile from state"
        }
        this.buildProfile = this.buildProfile.bind(this);
    }

    buildProfile(){
        var profileStringTODisplay =[];



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
import React, {Component} from 'react';
import {Grid, Cell, Button, FABButton,Icon, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';
class CreateAccount extends Component {
    render() {
        return(
            <div className="login-div-primary">
                <div>
                    <Textfield
                    onChange={() => {}}
                    label="First Name"
                    style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                    onChange={() => {}}
                    label="Last Name"
                    style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                    onChange={() => {}}
                    label="Email Address"
                    style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                    onChange={() => {}}
                    label="Password"
                    style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Button class="pdp-button" raised colored>Create Account</Button>
                </div>
            </div>
        )
    }
}
export default CreateAccount;
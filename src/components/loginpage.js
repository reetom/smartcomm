import React, {Component} from 'react';
import {Grid, Cell, Button, FABButton,Icon, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';
class Login extends Component {
    render() {
        return(
            <div className="login-div-primary">
                <div>
                    <Textfield
                    onChange={() => {}}
                    label="User ID"
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
                    <Button class="submit-button" raised colored>Sign In</Button>
                </div>
                <div>
                    <Link to="/passwordreset">
                        <h6>Forgot Password?</h6>
                    </Link>
                    <Link to="/createaccount">
                        <h6>Create Account</h6>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Login;
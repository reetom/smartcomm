import React, {Component} from 'react';

class Preferences extends Component {

    constructor(props){
        super(props);
        this.state={
            preferenceString:""
        }
        this.buildPreferences = this.buildPreferences.bind(this);
    }

    buildPreferences(){
        var preferenceString=[];

        preferenceString.push(
            <div>Hello</div>
        );
        this.setState({preferenceString:preferenceString});
    }

    componentDidMount(){
        this.buildPreferences();
    }
    render() {
        const {preferenceString} = this.state;

        return(
            <div>
                {preferenceString}
            </div>
        );
    }
}
export default Preferences;
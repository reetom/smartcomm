import React, {Component} from 'react';
import {Badge, Icon} from 'react-mdl';

class BuildFavBadge extends Component{

    constructor(props){
        super(props);
        this.state = {
            displayFavBadge: "",
       }
       this.updateFavBadge = this.updateFavBadge.bind(this)
    }

    updateFavBadge(){
        const favCount = localStorage.getItem("favCount");
        console.log(favCount);
        var favBadgeToDisplay = "";
        if (favCount != null && favCount != "0"){
            favBadgeToDisplay = <Badge text={favCount} overlap><Icon name="favorite" /></Badge>
        }else {
            favBadgeToDisplay = <Badge><Icon name="favorite" /></Badge>
        }
        //Set the state for app.js here
        this.setState({displayFavBadge: favBadgeToDisplay})
        
    }

    componentDidMount(){
        this.updateFavBadge();
    }

    render(){
        const {displayFavBadge} =  this.state;
        return(displayFavBadge);
    }

}
export default BuildFavBadge;
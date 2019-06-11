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
        var favCount = localStorage.getItem("favCount");
        var favBadgeToDisplay = "";
        console.log(favCount);
        //hardcoded for now, fix it...
        favCount = 3;
        if (favCount != null && favCount != "0"){
            favBadgeToDisplay = <Badge text={favCount} overlap><Icon name="favorite" /></Badge>
            console.log("returning Badge with some count");
        }else {
            favBadgeToDisplay = <Badge><Icon name="favorite" /></Badge>;
            console.log("returning empty Badge with 0 count");
        }
        this.setState({displayFavBadge: favBadgeToDisplay});
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
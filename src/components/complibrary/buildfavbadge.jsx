import React, {Component} from 'react';
import {Badge, Icon} from 'react-mdl';

class BuildFavBadge extends Component{

    constructor(props){
        super(props);
        this.state = {
            displayFavBadge: "",
            favCount:0
       }
       this.updateFavBadge = this.updateFavBadge.bind(this);
       this.incrementFavCount = this.incrementFavCount.bind(this);
       this.decrementFavCount = this.decrementFavCount.bind(this);
    }

    incrementFavCount(){
        let {favCount} = this.state;
        favCount = favCount+1;
        this.setState({favCount:favCount});
    }

    decrementFavCount(){
        let {favCount} =  this.state;
        if (favCount>0){
            favCount = favCount-1;
        }
        this.setState({favCount:favCount});
    }

    updateFavBadge(){
        var favCount = localStorage.getItem("favCount");
        var favBadgeToDisplay = "";
        console.log(favCount);
        //hardcoded for now, fix it...
        favCount = 2;
        if (favCount != null && favCount != "0"){
            favBadgeToDisplay = <Badge text={favCount} overlap><Icon name="favorite" /></Badge>
        }else {
            favBadgeToDisplay = <Badge><Icon name="favorite" /></Badge>;
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
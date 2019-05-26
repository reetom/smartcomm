import React, {Component} from 'react';
import BuildProductCardFavorites from './complibrary/buildproductcardfavorites';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Favorite extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            favCardUnit:"",
       }
    }

    buildFavoriteCards(){
        // Get the list of favorites from localstorage for the guest user.
        let favList = JSON.parse(localStorage.getItem("favList"));
        var favCardUnit ="";
        var favCardUnitToDisplay ="";
        //Get the list of favorites from backend for the signed in user. @ToDo
        if (favList != null && favList.length >0){
        //Loop through the products in the fav list and build the product cards to display.
        favCardUnit = favList.map(product =>  <BuildProductCardFavorites productFromParent={product} buildFavoriteCards = {this}/>)
        favCardUnitToDisplay = <div className="fav-grid">{favCardUnit}</div>
        this.setState({favCardUnit: favCardUnitToDisplay})
        } else {
            favCardUnit = <div className="no-fav-grid"> <h1>Your Favorite List is Empty...</h1></div>
            this.setState({favCardUnit: favCardUnit})
        }
    }

    removeFromFav(){
        var favList =[];
        var favCount = 0;
        //Couldn't pass this item to remove as param and so the hack is to use local storage.
        const product = JSON.parse(localStorage.getItem("itemToRemove"));
        //Clear the item from localstorage as we don't meed it anymore.
        localStorage.removeItem("itemToRemove");
        //First check if the favList in local storate is empty, if not empty add to the list
        let favListFromLocalStoreage = JSON.parse(localStorage.getItem("favList"));
        if (favListFromLocalStoreage != null) {
            favListFromLocalStoreage.map(forEachProduct => {
                if(forEachProduct.productName != product.productName){ 
                    favList.push(forEachProduct);
                    favCount= favCount+1;
                }
            
            });
        }   
        localStorage.setItem("favList",JSON.stringify(favList));
        localStorage.setItem("favCount",JSON.stringify(favCount));
        this.buildFavoriteCards();

    }

    componentDidMount(){
        this.buildFavoriteCards();
    }
       
    render() { 
        const {favCardUnit} = this.state;
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "fav-landing-grid">
                    <Cell col={12}>
                        {favCardUnit}
                       </Cell>
                </Grid>
            </div>
        )
    }
}
export default Favorite;
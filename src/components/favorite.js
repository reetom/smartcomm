import React, {Component} from 'react';
import ProductCardFavorite from './complibrary/productcardfavorite';
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

    componentDidMount(){
        //Keep the fav page in sync with localstorage
        //this.hydrateStateWithLocalStorage();
        // Get the list of favorites from localstorage for the guest user.
        let favList = JSON.parse(localStorage.getItem("favList"));
        var favCardUnit ="";
        //Get the list of favorites from backend for the signed in user. @ToDo
            if (favList != null && favList.length >0){
            //Loop through the products in the fav list and build the product cards to display.
            console.log(favList);
            favCardUnit = favList.map(product =>  <ProductCardFavorite product={product}/>)
            this.setState({favCardUnit: favCardUnit})

        } else {
            favCardUnit = <h1>Your Favorite List is Empty...</h1>
            this.setState({favCardUnit: favCardUnit})
        }
    }
       
    render() { 
        const {favCardUnit} = this.state;
      {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "fav-landing-grid">
                    <Cell col={12}>
                        <div className="fav-grid"> 
                            {favCardUnit}
                        </div>
                    </Cell>
                </Grid>
            </div>
             
        )}
    }
}
export default Favorite;
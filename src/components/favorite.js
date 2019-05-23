import React, {Component} from 'react';
import ProductCardStretched from './complibrary/productcardstretched';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Favorite extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
       }
    }

    componentDidMount(){
        //Keep the fav page in sync with localstorage
        //this.hydrateStateWithLocalStorage();
        // Get the list of favorites from localstorage for the guest user.
        let favList = JSON.parse(localStorage.getItem("favList"));
        //Get the list of favorites from backend for the signed in user. @ToDo
            if (favList != null){
            //Loop through the products in the fav list and build the product cards to display.
            console.log(favList);

        } else {
            console.log("YOUR FAV LIST IS EMPTY");
        }
    }
       
    render() { 
        return(null)
      {/*  const cardUnitStretched =  <ProductCardStretched product={null}/>
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "fav-landing-grid">
                    <Cell col={12}>
                        <div className="fav-grid"> 
                            {cardUnitStretched}
                        </div>
                    </Cell>
                </Grid>
            </div>
             
        )*/}
    }
}
export default Favorite;
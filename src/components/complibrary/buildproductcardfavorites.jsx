import React, {Component} from 'react';
import {CardText,Card,CardTitle, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';

class BuildProductCardFavorites extends Component {

    constructor(props){
        super(props);
        this.state = {
            //empty for now
        }
    }
    

    componentDidMount(){
    }

    render() {
        const product = this.props.productFromParent;
        var productNameEllipsis = product.productName.toString().substring(0,29) + "...";
        return(
            <div>
                <Card shadow={5} style={{minwidth: '200'}}>
                    <CardTitle style={{color: '#fff', height: '250px'}}>
                    <Link to={{
                        pathname: '/pdp',
                        state: {
                            productToDisplay: product
                        }
                    }}>
                    <img
                    src={product.imageURL}
                    alt={product.imageName}
                    className="card-image"
                    />
                    </Link>
                    </CardTitle>
                    <CardText>
                        {productNameEllipsis} 
                        <div>${product.price}</div>
                    </CardText>
                    <CardMenu style={{color: 'RED'}}>
                        <IconButton name="share" style={{color: 'Blue'}}/>
                        <IconButton name="delete" onClick={() => {  localStorage.setItem("itemToRemove", JSON.stringify(product));
                                                                    this.props.buildFavoriteCards.removeFromFav();
                                                                    }}/>
                        <IconButton name="shoppingcart"  style={{color: 'Orange'}}
                                                                    onClick={() => addToBag({product})}
                                                                />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}

//This function should be in a separare file so that addToBag code is not dublicated across the app.
function addToBag({product}){
    var cartProducts =[];
    var cartCount = 0;
    var prodAlreadyInCart = "false";
    //First check if the favList in local storate is empty, if not empty add to the list
    let favListFromLocalStoreage = JSON.parse(localStorage.getItem("cartProducts"));
    if (favListFromLocalStoreage != null) {
        favListFromLocalStoreage.map(forEachProduct => {
            cartProducts.push(forEachProduct); 
            cartCount = cartCount+1;
            //Check if the product already exist in the fav list
            if (prodAlreadyInCart === "false"){
                if(forEachProduct.productID === product.productID){
                    prodAlreadyInCart = "true"; 
                    console.log("Product is already in your cart...");
                }
            }
        
        });
    } 
    //If the product doesn't exist in the fav list, add it to the fav list.
    if (prodAlreadyInCart == "false"){
        cartProducts.push(product);
        cartCount = cartCount +1;
    }
    //Update the favs list and count in the localstorage.
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    localStorage.setItem("cartCount",JSON.stringify(cartCount));
}

export default BuildProductCardFavorites;
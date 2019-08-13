import React, {Component} from 'react';
import {CardText,Card,CardTitle, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';
import UpdateCart from './updatecart';

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
    let cartObject = JSON.parse(localStorage.getItem("cart"));
    let cartItems ="";
    if (cartObject != null) {
       cartItems = cartObject.cartItems;
       console.log("products: "+ product);
       cartItems.map(cartItem => {
            cartCount = cartCount+1;
            //Check if the product already exist in the cart
            if (prodAlreadyInCart === "false"){
                if(cartItem.product.productID !== null && cartItem.product.productID === product.productID){
                    //Product found in cart
                    prodAlreadyInCart = "true"; 
                    console.log("Product is already in your cart...");
                }
            }
       });
    } 
    //If the product doesn't exist in the cart, add it to the cart.
    if (prodAlreadyInCart === "false"){
        //When the product is added to cart from outside PDP, quantity will be 1 and color will be the SKU color.
        //Since color and SKU selection is provided in PDP alone.
        cartItems.push({"product": product, "quantity": "1", "color":product.filterableFacets.Color});
        cartCount = cartCount +1;
        //Update the shopping cart with the products in localstorage.
        UpdateCart("updateProducts", cartItems);
        //Keep the cart product count in localstorage to display on the badge.
        localStorage.setItem("cartCount",JSON.stringify(cartCount));
    }
}

export default BuildProductCardFavorites;
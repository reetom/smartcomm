import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton, Snackbar} from 'react-mdl';
import {Link} from 'react-router-dom';
import App from '../../App';
import SocialShareModal from './socialsharemodal';


class BuildProductCard extends Component {

    constructor(props){
        super(props);
        this.state = { 
            modalShow: false,
            isSnackbarActive: false,
        };
        this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
        this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    }

    handleShowSnackbar() {
        this.setState({
          isSnackbarActive: true,
        });
    }

    handleTimeoutSnackbar() {
        this.setState({ isSnackbarActive: false });
    }

    render() {

        const product = this.props.productFromParent;
        let modalClose = () => this.setState({ modalShow: false });
        var {isSnackbarActive} = this.state;

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
                        {product.productName} 
                        <div>${product.price}</div>
                    </CardText>
                    <CardMenu style={{color: 'RED'}}>
                        <IconButton name="share" style={{color: 'Blue'}} 
                            onClick={() => this.setState({ modalShow: true })}
                        />
                        <SocialShareModal style={{opacity:1}}
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                        <IconButton name="favorite" onClick={() => addToFav({product})}/>
                        <IconButton name="shoppingcart"  style={{color: 'Orange'}}
                            onClick={() => addToBag({product})}
                        />
                            <Snackbar
                                active={isSnackbarActive}
                                onClick={this.handleClickActionSnackbar}
                                onTimeout={this.handleTimeoutSnackbar}
                                action="View Cart"> Product Add to Cart
                            </Snackbar>
                    </CardMenu>
                </Card>
            </div>
        )

    }
}

function addToFav({product}){
    var favList =[];
    var favCount = 0;
    var favAlreadyExist = "false";
    //First check if the favList in local storate is empty, if not empty add to the list
    let favListFromLocalStoreage = JSON.parse(localStorage.getItem("favList"));
    if (favListFromLocalStoreage != null) {
        favListFromLocalStoreage.map(forEachProduct => {
            favList.push(forEachProduct); 
            favCount = favCount+1;
            //Check if the product already exist in the fav list
            if (favAlreadyExist === "false"){
                if(forEachProduct.productID === product.productID){
                    favAlreadyExist = "true"; 
                    console.log("Product is already in the favorite list");
                }
            }
        
        });
    } 
    //If the product doesn't exist in the fav list, add it to the fav list.
    if (favAlreadyExist == "false"){
        favList.push(product);
        favCount = favCount +1;
    }
    //Update the favs list and count in the localstorage.
    localStorage.setItem("favList",JSON.stringify(favList));
    localStorage.setItem("favCount",JSON.stringify(favCount))
    new App().buildFavoriteBadge();// this line of code is wrong.. I need to implement a observer for the badge to update the fav count.
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
                    console.log("Product is already in the favorite list");
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
    localStorage.setItem("cartCount",JSON.stringify(cartCount))
}
export default BuildProductCard;
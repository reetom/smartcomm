import React, {Component} from 'react';
import {Button} from 'react-mdl';
import { Container,Row, Col} from 'react-bootstrap';


class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            singleProductRow:"",
       }
       this.removeFromBag = this.removeFromBag.bind(this);
       this.saveProduct = this.saveProduct.bind(this);
    }

    buildProductRows(){
        // Get the list of products in the cart from localstorage for the guest user.
        var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        console.log(cartProducts);
        var singleProductRow ="";
        var productRowToDisplay ="";
        //Get the cart from backend for the signed in user. @ToDo
        if (cartProducts != null && cartProducts.length >0){
            console.log("you are inside the condition");
        //Loop through the products in the  cart and build the product rows to display.
        singleProductRow = cartProducts.map(product =>  
            <div className="cart-pord-row">
                <Row>
                    <Col sm={4} className="cart-prod-image">
                    <div className="text-center">
                        <img
                            src={product.imageURL}
                            alt={product.imageName}
                            className="cart-image"
                            />
                    </div>

                    </Col>
                    <Col sm={4}>
                        <div>{product.productName}</div>
                        <div>Price: ${product.price}</div>
                        <div>Quantity: 2</div>
                        <div>Color: {product.filterableFacets.color}</div>
                    </Col>
                    <Col sm={4}> 
                        <div className="text-right">
                        <Button class="cart-buttons" raised onClick={this.saveProduct(product)}>Save For Later</Button>
                        </div>
                        <div className="text-right">
                        <Button class="cart-buttons" raised onClick={this.removeFromBag(product)}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )        
        this.setState({singleProductRow: singleProductRow})
        } else {
            singleProductRow = <div> <h1>Your Cart is Empty, Continue to Shop...</h1></div>
            this.setState({singleProductRow: singleProductRow})
        }
    }
    // This method is to remove an item from the saved list that displayed at the bottom of the cart
    removeSavedProduct(){
        var savedList =[];
        var favCount = 0;
        //Couldn't pass this item to remove as param and so the hack is to use local storage.
        const product = JSON.parse(localStorage.getItem("itemToRemoveSavedList"));
        //Clear the item from localstorage as we don't meed it anymore.
        localStorage.removeItem("itemToRemoveSavedList");
        //First check if the favList in local storate is empty, if not empty add to the list
        let favListFromLocalStoreage = JSON.parse(localStorage.getItem("savedList"));
        if (favListFromLocalStoreage != null) {
            favListFromLocalStoreage.map(forEachProduct => {
                if(forEachProduct.productName != product.productName){ 
                    savedList.push(forEachProduct);
                }
            
            });
        }   
        localStorage.setItem("savedList",JSON.stringify(savedList));
        this.buildFavoriteCards();

    }
    // This method displays the recommended products based on the products in the cart.
    showRecommendedProducts(){

    }

    // This method displays the saved list of products in the cart.
    showSavedProducts(){

    }

    // This method saves the selected products to the "Save For Later List".
    saveProduct(product){

    }

    //This method removes the item from the bag.
    removeFromBag(product){

    }

    componentDidMount(){
        this.buildProductRows();
        this.showSavedProducts();
        this.showRecommendedProducts();
    }

    render(){

        const {singleProductRow} = this.state;
        return(
            <Container className="cart-page">
                <Row>
                    <Col sm={9}>
                        {singleProductRow}
                    </Col>
                    <Col sm={3}>This space is for the price This space is for the price This space is for the price This space is for the price This space is for the price</Col>
                </Row>
                    
                <Row>
                    ----------------------------------
                    Saved Producs come here
                    ----------------------------------
                </Row>
                <Row>
                    ----------------------------------
                    Recommended Products come here
                    ----------------------------------
                </Row>

            </Container>
        )
    }

}
export default ShoppingCart;
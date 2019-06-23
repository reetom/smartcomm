import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Container,Row, Col} from 'react-bootstrap';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import PayPalCheckoutPage from './paypalcheckoutpage';
import UpdateCart from './complibrary/updatecart';
import CreateEmptyCart from './complibrary/createemptycart';
import RecommendedProducts from './../data/recommendedproducts';
import { CardText,Card,CardTitle, CardMenu,IconButton, Snackbar} from 'react-mdl';
import {Link} from 'react-router-dom';
import { cpus } from 'os';


class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            singleProductRow:"",
            favCardUnit:"",
            savedCardUnit: "",
            recommendedCardUnit:"",
            cartTotalDetails:{"subtotal": 0.00, "tax":0.00, "discount":0.00, "grandTotal":0.00},
            selectedQuantity:"1",
            isCartEmpty:"true"
       }
       this.saveProduct = this.saveProduct.bind(this);
       this.beginCheckout = this.beginCheckout.bind(this);
       this.updateCartInSession = this.updateCartInSession.bind(this);
       this.clearCart = this.clearCart.bind(this);
       this.removeFromBag = this.removeFromBag.bind(this);
       this.showRecommendedProducts = this.showRecommendedProducts.bind(this);
       this.addToBag = this.addToBag.bind(this);
       this.addToFav = this.addToFav.bind(this);
       this.removeFromSavedProducts = this.removeFromSavedProducts.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
    }

    //This function buils the products rows in the carts main body.
    buildProductRows(){
        console.log("building product rows in the cart");
        // Get the list of products in the cart from localstorage for the guest user.
        var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        var singleProductRow ="";
        var productRowToDisplay ="";
        var selectedQuantity = "1";
        var sku="123456789";
        var isCartEmpty = "true";
        //Get the cart from backend for the signed in user. @ToDo
        if (cartProducts != null && cartProducts.length >0){
            isCartEmpty = "false";
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
                        <div className="cart-product-details">
                            <div>{product.productName}</div>
                            <div>Price: ${product.price}    $<del>3000</del></div>
                            <div>Quantity: {selectedQuantity}</div>
                            <div>Color: {product.filterableFacets.color}</div>
                            <div>SUBTOTAL: ${product.price*selectedQuantity}</div>
                        </div>
                    </Col>
                    <Col sm={4}> 
                        <div className="right-aligned-buttons">
                            <Button color="primary"  raised onClick={() => this.saveProduct(product)}>Save For Later</Button>
                        </div>
                        <div className="right-aligned-buttons">
                            <Button color="primary" raised onClick={() => this.removeFromBag(product)}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            )   
        } else {
            singleProductRow = <div> <h1>Your Cart is Empty, Continue to Shop...</h1></div>
        }
        this.setState({singleProductRow: singleProductRow});
        this.setState( {isCartEmpty:isCartEmpty});
        
    }

    //This function is to submit promo code, recalcualte cart and update the session.
        onSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const promoCodeEntered = data.get('promotion');
        var promotions = {};
        if ("discount20" === promoCodeEntered){
            // update promotion details in the cart. We don't have APIs so we will apply 20% discount.
            promotions ={"promocode":"",
                            "isPromoCodeValid": "true",
                            "expiryDate":"Not Applicable",
                            "discountPercentage":"20",
                            "discountPrice":"0.00"
            };

            //Update the shopping cart with the products in localstorage.
            UpdateCart("updatePromotions", promotions);
            //Recalcualte  Cart Total and update session
            this. updateCartInSession();
        }
        else {
            console.log("Invalid Promo Code : " + promoCodeEntered);
        }
    }


    //This function will update the big ass cart object that has everything in it.
    updateCartInSession(){
        // Get the list of products in the cart from localstorage for the guest user.
        var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        var cartTotalDetails = {};
        var cartProductsArray = [];
        var selectedQuantity = "1";
        const sku="123456789";
        var subTotal = 0;
        const cartFromSession = JSON.parse(localStorage.getItem("cart"));
        const promotions = cartFromSession.promotions;
        var discountPercentage ="";
        var discountPrice ="";
        if (typeof(promotions) != "undefined"){
            discountPercentage = promotions.discountPercentage;
            discountPrice = promotions.discountPrice;
        }

        if (cartProducts != null && cartProducts.length >0){
            //Loop through the products in the  cart and build the product rows to display.
            cartProducts.map(product => 
                {
                    //Add every product and selected facet to the actual cart object.
                    cartProductsArray.push({"product": product, "quantity": selectedQuantity, "sku":sku});
                    subTotal = subTotal + (product.price*selectedQuantity);
                    cartTotalDetails.subtotal = subTotal.toString();
                    cartTotalDetails.tax = (subTotal*0.1).toString();
                    cartTotalDetails.grandTotal = (subTotal*1.1).toString();
                })
            if (discountPrice !== ""){
                cartTotalDetails.grandTotal = cartTotalDetails.grandTotal - discountPrice;
                cartTotalDetails.discount = discountPrice;

            }else if (discountPercentage != ""){
                cartTotalDetails.grandTotal = cartTotalDetails.grandTotal *(100-discountPercentage)/100;
                cartTotalDetails.discount = cartTotalDetails.grandTotal * (discountPercentage/100);
            }
        }
        this.setState({cartTotalDetails: cartTotalDetails})
        //Update the shopping cart with the products in localstorage.
        UpdateCart("updateProducts", cartProductsArray);
        //UpdatedCart price in local storage
        UpdateCart("updateCartTotals", cartTotalDetails);
    }

    //This function is called when the clear cart button is hit. This will empty the cart and zero the totals.
    clearCart(){
        // This will empty the main cart object.
          CreateEmptyCart();
          const singleProductRow = <div> <h1>Your Cart is Empty, Continue to Shop...</h1></div>;
          //clear the cart items in state
          this.setState({singleProductRow: singleProductRow});
          //Clear the cart obects in session.
          localStorage.setItem("cartProducts","");
          //Clear the cart totals in state.
          const cartTotalDetails= {"subtotal": 0.00, "tax":0.00, "discount":0.00, "total":0.00}
          this.setState({cartTotalDetails:cartTotalDetails});
          //Set the isCartEmpty variable to "true". The other place it's set is in building the cart rows for default view.
          this.setState({isCartEmpty:"true"});
    }

     //Redierct the user to checkout optoins page for guest or signed-in user checkout.
    beginCheckout(){
       let path = '/checkoutoptions';
       this.props.history.push(path);
    }

    //This function removes a product from the cart.
    removeFromBag(productToRemove){
        console.log("removing product from bag" + productToRemove);
        var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        var newProductArray = [];
        if (cartProducts != null && cartProducts.length >0){
            //Loop through the products in the  cart and build the product rows to display.
            cartProducts.map(product => {
                    if(productToRemove.productID !== product.productID){
                        newProductArray.push(product);
                    }
                }
            )
        }
        //Set this new list of products in cart in session.
        localStorage.setItem("cartProducts",JSON.stringify(newProductArray));
        //Rebuild the product rows in the cart for display.
        this.buildProductRows();
        //Update the cart in session so that the cart totals are reflected correctly.
        this.updateCartInSession();
    }

    // This method moves the selected products from the cart to the "Save For Later List".
    saveProduct(product){
        var savedList =[];
        var productAlreadyExist = "false";
        //First check if the favList in local storate is empty, if not empty add to the list
        let savedListFromLocalStoreage = JSON.parse(localStorage.getItem("savedList"));
        if (savedListFromLocalStoreage != null) {
            savedListFromLocalStoreage.map(forEachProduct => {
                savedList.push(forEachProduct); 
                //Check if the product already exist in the fav list
                if (productAlreadyExist === "false"){
                    if(forEachProduct.productID === product.productID){
                        productAlreadyExist = "true"; 
                        console.log("Product is already in the saved list");
                    }
                }
            
            });
        } 
        //If the product doesn't exist in the fav list, add it to the fav list.
        if (productAlreadyExist == "false"){
            savedList.push(product);
            //Update the favs list and count in the localstorage.
            localStorage.setItem("savedList",JSON.stringify(savedList));
            this.buildSavedCards();
            //Also, remove this product from the cart.
            this.removeFromBag(product);

        }
    }

    //This function is used to remove a product from the saved list.
    removeFromSavedProducts(product){
        var favList =[];
        var favCount = 0;
        console.log("product to remove from saved list:" + product);
        //First check if the favList in local storate is empty, if not empty add to the list
        let savedListFromLocalStoreage = JSON.parse(localStorage.getItem("savedList"));

        if (savedListFromLocalStoreage != null) {
            savedListFromLocalStoreage.map(forEachProduct => {
                if(forEachProduct.productName != product.productName){ 
                    favList.push(forEachProduct);
                    favCount= favCount+1;
                }
            
            });
        }   
        localStorage.setItem("savedList",JSON.stringify(favList));
        //Remove the product from the saved list.
        this.buildSavedCards();

    }

    buildSavedCards(){
        // Get the list of favorites from localstorage for the guest user.
        let savedList = JSON.parse(localStorage.getItem("savedList"));
        var savedCardUnit ="";
        var savedCardUnitToDisplay ="";
        var productNameEllipsis = "";
        //Get the list of favorites from backend for the signed in user. @ToDo
        if (savedList != null && savedList.length >0){
            //Loop through the products in the saved list and build the product cards to display.
            savedCardUnit = savedList.map(product =>  
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
                            {(product.productName.toString()).substring(0,29)+ "..."} 
                            <div>${product.price}</div>
                        </CardText>
                        <CardMenu style={{color: 'RED'}}>
                            <IconButton name="share" style={{color: 'Blue'}} />
                            <IconButton name="delete" onClick={() => this.removeFromSavedProducts({product})}/>
                            <IconButton name="shoppingcart" style={{color: 'Orange'}} onClick={() => {this.addToBag({product});
                                                                                                    this.removeFromSavedProducts({product});
                            }}/>
                        </CardMenu>
                    </Card>
                </div>
            

                );
            savedCardUnitToDisplay = <div className="saved-prod-grid">{savedCardUnit}</div>
        } else {
            savedCardUnitToDisplay = <div className="no-saved-prod-grid"> <h5>There are no saved products</h5></div>
        }
        //Set the saved cards in the state.
        this.setState({savedCardUnit: savedCardUnitToDisplay});
    }

    showRecommendedProducts(){
        // Get the list of favorites from localstorage for the guest user.
        let recommendedList = RecommendedProducts;
        var recommendedCardUnit ="";
        var recommendedCardUnitToDisplay ="";

        //Get the list of favorites from backend for the signed in user. @ToDo
        if (recommendedList != null && recommendedList.length >0){
            //Loop through the products in the saved list and build the product cards to display.
            recommendedCardUnit = recommendedList.map(product =>  
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
                                
                            />
                            <IconButton name="favorite" onClick={() => this.addToFav({product})}/>
                            <IconButton name="shoppingcart"  style={{color: 'Orange'}}
                                onClick={() => this.addToBag({product})}
                            />
                        </CardMenu>
                    </Card>
                </div>
                );
                recommendedCardUnitToDisplay = <div className="recommended-prod-grid">{recommendedCardUnit}</div>;

            } else {
                recommendedCardUnitToDisplay = <div className="no-recommended-prod-grid"> <h5>There are no recommendations at this time</h5></div>
            }
            //Set the saved cards in the state.
            this.setState({recommendedCardUnit: recommendedCardUnitToDisplay});
    }
    //This add to Fav fuction is used to mark a recommended product as favorite.
    addToFav({product}){
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
        localStorage.setItem("favCount",JSON.stringify(favCount));
    
    }
    //This add to bag fuction is used to movea  product from the saved list or the recommended list to the cart.
    addToBag({product}){console.log("adding product to bag :"+ {product});
        var cartProducts =[];
        var cartCount = 0;
        var prodAlreadyInCart = "false";
        //First check if the favList in local storate is empty, if not empty add to the list
        let cartProductsFromLocalStoreage = JSON.parse(localStorage.getItem("cartProducts"));
        if (cartProductsFromLocalStoreage != null) {
            cartProductsFromLocalStoreage.map(forEachProduct => {
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
        //Rebuild the product rows in the cart for display.
        this.buildProductRows();
        //Update the cart in session so that the cart totals are reflected correctly.
        this.updateCartInSession();
    }

    componentDidMount(){
        CreateEmptyCart();
        this.buildProductRows();
        //Need to have this call for first time render of the cart page.
        this.buildSavedCards();
        this.updateCartInSession();
        this.showRecommendedProducts();
    }

    render(){

        const {singleProductRow, savedCardUnit, recommendedCardUnit, cartTotalDetails, isCartEmpty} = this.state;
        var cartTotals = "0.00";
        var tax = cartTotalDetails.tax;
        var discount = cartTotalDetails.discount;
        var grandTotal = cartTotalDetails.grandTotal;
        var showChekcoutButton ="";
        var showPromotionsButton ="";
        var showPaypalButton ="";
        var clearCartButton =""
        if (cartTotalDetails.subtotal !== null || cartTotalDetails.subtotal !== "" || typeof(cartTotalDetails.subtotal) !== "undefined"){
            cartTotals = cartTotalDetails.subtotal;
        }

        //Enable/disable buttons based on empty cart or not.
         if (isCartEmpty === "true"){
            showChekcoutButton = <Button color="primary" disabled block raised onClick={this.beginCheckout}>Checkout</Button>;
            showPromotionsButton = <Button color="primary" disabled block >Apply Promotion</Button>;
            showPaypalButton = "";
            clearCartButton = <Button color="primary" disabled block raised onClick={this.clearCart}>Clear Cart</Button>;
        } else {
            showChekcoutButton =< Button color="primary" block raised onClick={this.beginCheckout}>Checkout</Button>;
            showPromotionsButton = <Button color="primary" block >Apply Promotion</Button>;
            //showPaypalButton = <PayPalCheckoutPage/>;
            clearCartButton = <Button color="primary" block raised onClick={this.clearCart}>Clear Cart</Button>;
         }
         
        return(
            <div className="page-background">
                <Container fluid>
                    <Row>
                        <Col sm={9}>
                            {singleProductRow}
                        </Col>
                        <Col className="text-center" sm={3}>
                            <div className="pricing-block-cart">
                                <div >
                                    {showChekcoutButton}
                                    
                                </div>
                                <div className="one-em-spacing"></div>
                                <div>
                                    {showPaypalButton}
                                </div>

                                <Row>
                                    <Col sm={6}>
                                        <div className="cart-totals-label">SUBTOTAL: </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="cart-totals-value">${cartTotals}</div>  
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <div className="cart-totals-label">TAX: </div> 
                                    </Col>
                                    <Col sm={6}>
                                        <div className="cart-totals-value">${tax}</div>  
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <div className="cart-totals-label">SHIPPING: </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="cart-totals-value">------- </div>  
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <div className="cart-totals-label">DISCOIUNT: </div> 
                                    </Col>
                                    <Col sm={6}>
                                        <div className="cart-totals-value">${discount}</div>  
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={6}>
                                        <div className="cart-totals-label">TOTAL: </div>  
                                    </Col>
                                    <Col sm={6}>
                                        <div className="cart-totals-value">${grandTotal}</div>  
                                        <div className="one-em-spacing"></div>
                                        <div className="one-em-spacing"></div>
                                    </Col>
                                </Row>
                                <Form onSubmit = {this.onSubmit}>
                                    <FormGroup>
                                        <Input type="text" name="promotion" id="promotion" placeholder="Enter Promo Code" />
                                    </FormGroup>
                                    <div classsName="center-aligned-buttons">
                                        {showPromotionsButton}
                                    </div>
                                </Form>

                                <div className="one-em-spacing"></div>
                                <div classsName="center-aligned-buttons">
                                    {clearCartButton}
                                </div>
                            </div>
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col sm={12}>
                                <div className="saved-proeducts-section">
                                    <SectionHeadingAndWhiteLine heading="Your Saved Products" color="white"/>
                                    {savedCardUnit}
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="recommendations-section">
                                <SectionHeadingAndWhiteLine heading="Recommended Products" color="white"/>
                                {recommendedCardUnit}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            
        );
    }
}
export default ShoppingCart;



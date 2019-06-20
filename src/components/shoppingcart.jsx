import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Form, Container,Row, Col} from 'react-bootstrap';
import BuildProductCardFavorites from './complibrary/buildproductcardfavorites';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import PayPalCheckoutPage from './paypalcheckoutpage';
import UpdateCart from './complibrary/updatecart';
import CreateEmptyCart from './complibrary/createemptycart';
import RecommendedProducts from './../data/recommendedproducts';
import BuildProductCard from './complibrary/buildproductcard';


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
            cartTotalDetails:{"subtotal": 0.00, "tax":0.00, "discount":0.00, "total":0.00},
            selectedQuantity:"1"
       }
       this.saveProduct = this.saveProduct.bind(this);
       this.beginCheckout = this.beginCheckout.bind(this);
       this.updateCartInSession = this.updateCartInSession.bind(this);
       this.clearCart = this.clearCart.bind(this);
       this.removeFromBag = this.removeFromBag.bind(this);
       this.showRecommendedProducts = this.showRecommendedProducts.bind(this);
    }

    buildProductRows(){
        console.log("building product rows in the cart");
        // Get the list of products in the cart from localstorage for the guest user.
        var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        var singleProductRow ="";
        var productRowToDisplay ="";
        var selectedQuantity = "1";
        var sku="123456789";
        //Get the cart from backend for the signed in user. @ToDo
        if (cartProducts != null && cartProducts.length >0){
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
    }

    updateCartInSession(){
        // Get the list of products in the cart from localstorage for the guest user.
        var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
        var cartTotalDetails = {};
        var cartProductsArray = [];
        var selectedQuantity = "1";
        var sku="123456789";
        var subTotal = 0;
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
                cartTotalDetails.discount = "0.00";
        }
        this.setState({cartTotalDetails: cartTotalDetails})
        //Update the shopping cart with the products in localstorage.
        UpdateCart("updateProducts", cartProductsArray);
        //UpdatedCart price in local storage
        UpdateCart("updateCartTotals", cartTotalDetails);
    }

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
    }

     //Rediect the user to checkout optoins page for guest or signed-in user checkout.
    beginCheckout(){
       let path = '/checkoutoptions';
       this.props.history.push(path);
    }
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

    // This method saves the selected products to the "Save For Later List".
    saveProduct(product){
        var savedList =[];
        var productAlreadyExist = "false";
        //First check if the favList in local storate is empty, if not empty add to the list
        let favListFromLocalStoreage = JSON.parse(localStorage.getItem("savedList"));
        if (favListFromLocalStoreage != null) {
            favListFromLocalStoreage.map(forEachProduct => {
                savedList.push(forEachProduct); 
                //Check if the product already exist in the fav list
                if (productAlreadyExist === "false"){
                    if(forEachProduct.productID === product.productID){
                        productAlreadyExist = "true"; 
                        console.log("Product is already in the favorite list");
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

    buildSavedCards(){
        // Get the list of favorites from localstorage for the guest user.
        let savedList = JSON.parse(localStorage.getItem("savedList"));
        var savedCardUnit ="";
        var savedCardUnitToDisplay ="";
        console.log("Reading saved products: " + savedList);
        //Get the list of favorites from backend for the signed in user. @ToDo
        if (savedList != null && savedList.length >0){
            //Loop through the products in the saved list and build the product cards to display.
            savedCardUnit = savedList.map(product =>  <BuildProductCardFavorites productFromParent={product} buildFavoriteCards = {this}/>)
            savedCardUnitToDisplay = <div className="fav-grid">{savedCardUnit}</div>
        } else {
            savedCardUnitToDisplay = <div className="no-fav-grid"> <h5>There are no saved products</h5></div>
        }
        //Set the saved cards in the state.
        this.setState({savedCardUnit: savedCardUnitToDisplay});
    }

    showRecommendedProducts(){
        // Get the list of favorites from localstorage for the guest user.
        let recommendedList = RecommendedProducts
        var recommendedCardUnit ="";
        var recommendedCardUnitToDisplay ="";
        console.log("Reading saved products: " + recommendedList);
        //Get the list of favorites from backend for the signed in user. @ToDo
        if (recommendedList != null && recommendedList.length >0){
            //Loop through the products in the saved list and build the product cards to display.
            recommendedCardUnit = recommendedList.map(product =>  <BuildProductCard productFromParent={product}/>)
            recommendedCardUnitToDisplay = <div className="fav-grid">{recommendedCardUnit}</div>
        } else {
            recommendedCardUnitToDisplay = <div className="no-fav-grid"> <h5>There are no recommendations at this time</h5></div>
        }
        //Set the saved cards in the state.
        this.setState({recommendedCardUnit: recommendedCardUnitToDisplay});
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

        const {singleProductRow, savedCardUnit, recommendedCardUnit, cartTotalDetails} = this.state;
        var cartTotals = "0.00";
        var tax = cartTotalDetails.tax;
        var discount = cartTotalDetails.discount;
        var grandTotal = cartTotalDetails.total;
        if (cartTotalDetails.subtotal !== null || cartTotalDetails.subtotal !== "" || typeof(cartTotalDetails.subtotal) !== "undefined"){
            cartTotals = cartTotalDetails.subtotal;
        }
        console.log("cart totals :" +cartTotals);
        return(
            <Container className="cart-page">
                <Row>
                    <Col sm={9}>
                        {singleProductRow}
                    </Col>
                    <Col className="text-center" sm={3}>
                        <div className="pricing-block-cart">
                            <div classsName="center-aligned-buttons">
                                <Button color="primary" block raised onClick={this.beginCheckout}>Checkout</Button>
                            </div>
                            <div classsName="center-aligned-buttons">
                                <PayPalCheckoutPage/>
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
                                </Col>
                            </Row>
                             <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Promo Code" onChange={this.handleChange}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Form>
                            <div classsName="center-aligned-buttons">
                                <Button color="primary" block disabled c>Apply Promotion</Button>
                            </div>
                            <div className="1em-spacing"></div>
                            <div classsName="center-aligned-buttons">
                                <Button color="primary" block raised onClick={this.clearCart}>Clear Cart</Button>
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
        )
    }
}
export default ShoppingCart;



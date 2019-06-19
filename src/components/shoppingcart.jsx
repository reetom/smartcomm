import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { Form, Container,Row, Col} from 'react-bootstrap';
import BuildProductCardFavorites from './complibrary/buildproductcardfavorites';
import SectionHeadingAndWhiteLine from './complibrary/sectionheadingandwhiteline';
import PayPalCheckoutPage from './paypalcheckoutpage';
import UpdateCart from './complibrary/updatecart';
import CreateEmptyCart from './complibrary/createemptycart';


class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            singleProductRow:"",
            favCardUnit:"",
            cartTotalDetails:{"subtotal": 0.00, "tax":0.00, "discount":0.00, "total":0.00},
            selectedQuantity:"1"
       }

       this.saveProduct = this.saveProduct.bind(this);
       this.beginCheckout = this.beginCheckout.bind(this);
       this.updateCartInSession = this.updateCartInSession.bind(this);
       this.clearCart = this.clearCart.bind(this);
       this.removeFromBag = this.removeFromBag.bind(this);
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
                        <div className="text-right">
                            <Button color="primary" class="cart-buttons" raised onClick={this.saveProduct(product)}>Save For Later</Button>
                        </div>
                        <div className="text-right">
                            <Button color="primary" class="cart-buttons" raised onClick={() => this.removeFromBag(product)}>Delete</Button>
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
                    cartTotalDetails.total = (subTotal*1.1).toString();
                })
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

    // This method saves the selected products to the "Save For Later List".
    saveProduct(product){
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
    }

    buildSavedCards(){
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
            favCardUnit = <div className="no-fav-grid"> <h1>There is nothing to show</h1></div>
            this.setState({favCardUnit: favCardUnit})
        }
    }

    componentDidMount(){
        CreateEmptyCart();
        this.buildProductRows();
        this.buildSavedCards();
        this.updateCartInSession();
    }

    render(){

        const {singleProductRow, favCardUnit, cartTotalDetails} = this.state;
        return(
            <Container className="cart-page">
                <Row>
                    <Col sm={9}>
                        {singleProductRow}
                    </Col>
                    <Col sm={3}>
                        <div className="pricing-block-cart">
                            <Button color="primary" class="payment-buttons" raised onClick={this.beginCheckout}>Checkout</Button>
                            <div classs="checkout-buttons">
                                <PayPalCheckoutPage/>
                            </div>

                            <Row>
                                <Col sm={6}>
                                    <div className="cart-totals-label">SUBTOTAL: </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="cart-totals-value">${cartTotalDetails.subtotal}</div>  
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="cart-totals-label">TAX: </div> 
                                </Col>
                                <Col sm={6}>
                                    <div className="cart-totals-value">${cartTotalDetails.tax}</div>  
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
                                    <div className="cart-totals-value">${cartTotalDetails.discount}</div>  
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="cart-totals-label">TOTAL: </div>  
                                </Col>
                                <Col sm={6}>
                                    <div className="cart-totals-value">${cartTotalDetails.total}</div>  
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
                            <Button color="primary" class="payment-buttons" >Apply Promotion</Button>
                            <Button color="primary" class="payment-buttons" raised onClick={this.clearCart}>Clear Cart</Button>
                        </div>
                    </Col>
                </Row>
                    
                <Row>
                   <Col sm={12}>
                        <div className="saved-proeducts-section">
                            <SectionHeadingAndWhiteLine heading="Your Saved Products" color="white"/>
                            {favCardUnit}
                        </div>
                   </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="recommendations-section">
                            <SectionHeadingAndWhiteLine heading="Recommended Products" color="white"/>
                            {favCardUnit}
                        </div>
                   </Col>
                </Row>

            </Container>
        )
    }
}
export default ShoppingCart;



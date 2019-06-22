import React, {Component} from 'react';
//import {Grid, Cell, Button, FABButton,Icon, Textfield} from 'react-mdl';
import ProductReviews from './../data/productreview.json';
import Accordion from './complibrary/specaccordion';
import {Button, Container, Row, Col} from 'reactstrap';
//import {Button, Container, Row, Col} from 'reactstrap';

class PDP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            currentIndex: -1,
       }
       this.addToBag = this.addToBag.bind(this);
       //this.saveForLater = this.saveForLater.bind(this);
    }

     //This add to bag fuction is used to movea  product from the saved list or the recommended list to the cart.
     addToBag({product}){
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
                 if(forEachProduct.productID !== null && forEachProduct.productID === product.productID){
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
     //There is no need to updated the big ass cart object in session, that will be done when 
     //the user goes to the cart page.
 }
    componentDidMount(){
        //Todo - replace with the PDP url
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then (json => {
            this.setState({
                products: json,
                isLoaded: true,               
            })
        });
    }

    handleChange = i => {
        this.setState({
          currentIndex: i
        });
      };

    render() {
        const { handleChange } = this;
        const { currentIndex, isActive} = this.state;
        var {productToDisplay} = this.props.location.state

        return(
            <div className="page-background">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <div class="Sirv" data-effect="zoom" >
                                <img data-src={productToDisplay.imageURL}
                                alt=""
                                className="pdp-image"/>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <h3>{productToDisplay.productName}   </h3>
                            <h3 className="price">${productToDisplay.price}</h3>
                            {productToDisplay.productDescShort} 
                            <div className="one-em-spacing"></div>

                            <div className="align-left">
                                <Button color="primary" raised>Add to Cart</Button> <Button color="primary" raised onClick={this.saveForLater}>Save for Later</Button>
                            </div>
                            <div className="one-em-spacing"></div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="accordion-div">
                            <Accordion productSpecs={productToDisplay.productSpecs} handleChange={handleChange} currentIndex={currentIndex}/>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default PDP;
import React, {Component} from 'react';
import ProductReviews from './../data/productreview.json';
import ProductSpecAccordion from './complibrary/productspecaccordion';
import CustomerReviewsAccordion from './complibrary/customerreviewsaccordion';
import {Button, Container, Row, Col, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

const Brown = {
    background: 'brown'
  };
  const Beige = {
    background: 'beige'
  };
  const Black = {
    background: 'black'
  };

class PDP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            quantityDropdownOpen: false,
            quantityDropDownValue:"select",
            colorDropdownOpen: false,
            colorDropDownValue:"select"
       }
       this.addToBag = this.addToBag.bind(this);
       //this.saveForLater = this.saveForLater.bind(this);
        //For the quantity drop down
        this.toggleQuantity = this.toggleQuantity.bind(this);
        this.changeQuantityValue = this.changeQuantityValue.bind(this);
        //For the color drop down
        this.toggleColor = this.toggleColor.bind(this);
        this.changeColorValue = this.changeColorValue.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    //Toggle for the quantity dorpdown
    toggleQuantity() {
        this.setState({
            quantityDropdownOpen: !this.state.quantityDropdownOpen
        });
      }
      //Dropdown value change
      changeQuantityValue(e) {
        this.setState({quantityDropDownValue: e.currentTarget.textContent});
      }

    //Toggle for the color dorpdown
    toggleColor() {
        this.setState({
            colorDropdownOpen: !this.state.colorDropdownOpen
        });
      }
      //Dropdown value change
      changeColorValue(e) {
        this.setState({colorDropDownValue: e.currentTarget.textContent});
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
        }
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
                <Container>
                    <Row>
                        <div className="pdp-image-prod-details">
                            <Col sm={6}>
                                <div class="Sirv" data-effect="zoom" >
                                    <img data-src={productToDisplay.imageURL}
                                    alt=""
                                    className="pdp-image"/>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="pdp-prod-details">
                                <h3>{productToDisplay.productName}   </h3>
                                <h3 className="pdp-price">${productToDisplay.price}</h3>
                                <h6 className="h6-text-justify">{productToDisplay.productDescShort} </h6>
                                <div className="one-em-spacing"></div>
                                <Row>
                                    <div className="quantity-color-toggle-div">
                                        <Col sm={2}>
                                            <h6>Quantity</h6>
                                        </Col>
                                        <Col sm={10}>
                                            <ButtonDropdown direction="right" isOpen={this.state.quantityDropdownOpen} toggle={this.toggleQuantity}>
                                                <DropdownToggle caret color="primary">{this.state.quantityDropDownValue}</DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">1</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">2</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">3</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">4</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">5</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">6</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">7</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">8</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeQuantityValue}><div className="quantity-dropdown-text">9</div></DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="quantity-color-toggle-div">
                                        <Col sm={2}>
                                            <h6>Color</h6>
                                        </Col>
                                        <Col sm={10}>
                                            <ButtonDropdown direction="right" isOpen={this.state.colorDropdownOpen} toggle={this.toggleColor}>
                                                <DropdownToggle caret color="primary">{this.state.colorDropDownValue}</DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={this.changeColorValue} style={Brown}><div className="color-dropdown-text">Brown</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeColorValue} style={Beige}><div className="color-dropdown-text">Beige</div></DropdownItem>
                                                    <DropdownItem onClick={this.changeColorValue} style={Black}><div className="color-dropdown-text">Black</div></DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </Col>
                                    </div>
                                </Row>
                                <div className="one-em-spacing"></div>
                                <div className="one-em-spacing"></div>
                                <div className="align-left">
                                    <Button color="primary" raised>Add to Cart</Button> <Button color="primary" raised onClick={() => this.saveProduct(productToDisplay)}>Save for Later</Button>
                                </div>
                                <div className="one-em-spacing"></div>
                                </div>
                                
                            </Col>
                        </div>

                    </Row>
                    <Row>
                        <div className="one-em-spacing"></div>
                        <div className="one-em-spacing"></div>
                        <div className="one-em-spacing"></div>
                        <div className="accordion-div">
                            <ProductSpecAccordion productSpecs={productToDisplay.productSpecs}/>
                        </div>
                    </Row>
                    <Row>
                        <div className="accordion-div">
                            <CustomerReviewsAccordion productSpecs={productToDisplay.productSpecs}/>
                        </div>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default PDP;
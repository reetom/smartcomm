import React, {Component} from 'react';
import {Grid, Cell, Button, FABButton,Icon, Textfield} from 'react-mdl';
import ProductReviews from './../data/productreview.json';
import Accordion from './complibrary/specaccordion';

class PDP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            currentIndex: -1
       }
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
            <Grid className = "pdp-grid">
            <Cell col={6}>
           <div class="Sirv" data-effect="zoom" >
                <img data-src={productToDisplay.imageURL}
                    alt=""
                    className="pdp-image"
                />
            </div>
            
            </Cell>
            <Cell col={6}>
                <h3>{productToDisplay.productName}   </h3>
                <h3 className="price">${productToDisplay.price}</h3>
                {productToDisplay.productDescShort}
                <div className="pdp-button-div">
                    <Textfield
                        onChange={() => {}}
                        label="Quantity"
                        style={{width: '75px'}}
                    />
                    <FABButton class="pdp-button-round" colored ripple>
                        <Icon name="add" />
                    </FABButton>
                    <FABButton class="pdp-button-round"colored ripple>
                        <Icon name="remove" />
                    </FABButton>
                </div>
                <div className="pdp-button-div1">
                    <Button class="submit-button" raised colored>Add to Cart</Button>
                    <Button class="submit-button" raised colored>Save for Later</Button>
                </div>

            </Cell>
            <Cell col={12}>
                <div className="accordion">
                    
                    <Accordion productSpecs={productToDisplay.productSpecs} handleChange={handleChange} currentIndex={currentIndex}/>
                    
                </div>
            </Cell>
           
            </Grid>
        )
    }
}
export default PDP;
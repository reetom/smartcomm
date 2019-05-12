import React, {Component} from 'react';
import {Grid, Cell, Button, FABButton,Icon, Textfield} from 'react-mdl';
import bag1 from '../../src/assets/products/bag1.jpeg';
import PDPData from './../data/pdp.json';
import ProductReviews from './../data/productreview.json';
import Accordion from './complibrary/specaccordion';


class PDP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            currentIndex: -1,
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
        var products = PDPData;//Fixture data, delete when connected to APIs and uncomment the next line
        //var {products} = this.state;
        const { handleChange } = this;
        const { currentIndex, isActive } = this.state;
        console.log(PDPData);
        return(
            <Grid className = "pdp-grid">
            <Cell col={6}>
            <img src={bag1}
                alt="bag1"
                className="pdp-image"
            />
            </Cell>
            <Cell col={6}>
                <h1>{products[0].productName}   </h1>
                <h3 className="price">${products[0].price}</h3>
                {products[0].productDescShort}
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
                    <Button class="pdp-button" raised colored>Add to Cart</Button>
                    <Button class="pdp-button" raised colored>Save for Later</Button>
                </div>

            </Cell>
            <Cell col={12}>
                <div className="accordion">
                    
                    <Accordion productSpecs={products[0].productSpecs} handleChange={handleChange} currentIndex={currentIndex}/>
                    
                </div>
            </Cell>
           
            </Grid>
        )
    }
}
export default PDP;
import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton, Slider, Checkbox} from 'react-mdl';
import {Link} from 'react-router-dom';
import CLPData from './../data/clp.json';
import landingbanner from '../../src/assets/banners/landingbanner5.jpg';
import ProductCard from './complibrary/productcard';


class PLP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            categoryName:"",
       }
    }
    
    componentDidMount(){
        //get the category name that was selected on the landing page and set it in state.
        var {categoryName} = this.props.location.state;
        this.setState({categoryName: {categoryName}});
        console.log("loading data for ".concat(categoryName).concat(" category"));
        //Load the stubbed CLPData
        var allProducts = CLPData;
        //Todo - replace with the clp url and get rid of the above stubbed data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then (json => {
                this.setState({
                    products: json,
                    isLoaded: true,               
                })
            });
        //filter the products based on category selected in the landing page.
        var filteredproducts= [];
        allProducts.map(product =>{
                if(product.category === categoryName){
                    filteredproducts.push(product);
                }
        })
        // set the filtered category products in state
        this.setState({products:filteredproducts});
    }
    render() {
        var {products} = this.state;
        //loop through every product in the array and build the card.
        const cardUnit = products.map(product =>  <ProductCard product={product}/>)

        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "plp-landing-grid">
                    
                        <Cell col={12}>
                        <div>
                                <img
                                    src={landingbanner}
                                    alt="landingbanner1"
                                    className="plp-landing-banner"
                                />
                        </div>
                        <div className="breadcrumb">
                            <h1>Departments > Women</h1>
                        </div>
                        </Cell>
                            
                        <Cell col={3}>
                            <div className="plp-refine">
                                <div className="plp-refine-brands">
                                    <h4>Brands</h4>
                                    <Checkbox label="Gucci" ripple defaultChecked />
                                    <Checkbox label="Aldo" ripple defaultChecked />
                                </div>
                                <div className="plp-refine-color">
                                    <h4>Colors</h4>
                                    <Checkbox label="Blue" ripple defaultChecked />
                                    <Checkbox label="White" ripple defaultChecked />
                                    <Checkbox label="Maroon" ripple defaultChecked />
                                    <Checkbox label="Black" ripple defaultChecked />
                                    <Checkbox label="Yellow" ripple defaultChecked />
                                    <Checkbox label="Baige" ripple defaultChecked />
                                    <Checkbox label="Green" ripple defaultChecked />
                                    <Checkbox label="Brown" ripple defaultChecked />
                                    <Checkbox label="Orange" ripple defaultChecked />
                                </div>
                                <div className="plp-refine-color">
                                    <h4>Material</h4>
                                    <Checkbox label="Leather" ripple defaultChecked />
                                    <Checkbox label="Fabric" ripple defaultChecked />
                                    <Checkbox label="Mixed" ripple defaultChecked />
                                </div>
                                <div  className="plp-refine-price">
                                    <h4>Price</h4>
                                    <Slider min={0} max={5000} defaultValue={2500} />
                                </div>
                                <div className="plp-refine-button">
                                <Button class="plp-button" raised colored onClick={this.handleShowSnackbar}>Apply</Button>
                                <Button class="plp-button" raised colored onClick={this.handleShowSnackbar}>Reset</Button>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={9}>
                        <div  className="plp-grid">
                            {cardUnit}
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default PLP;
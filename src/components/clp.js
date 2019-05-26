import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import landingbanner from '../../src/assets/banners/landingbanner3.jpg';
import CLPData from './../data/clp.json';
import BuildProductCard from './complibrary/buildproductcard';


class CLP extends Component {
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
        {/*
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then (json => {
                this.setState({
                    products: json,
                    isLoaded: true,               
                })
            });
        */}
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
        const cardUnit = products.map(product =>  <BuildProductCard productFromParent={product}/>)
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "clp-landing-grid">
                    <Cell col={12}>
                        <div> 
                                <img
                                    src={landingbanner}
                                    alt="landingbanner1"
                                    className="clp-landing-banner"
                                />
                        </div>
                        <div className="breadcrumb">
                            <h1>Departments > Women</h1>
                        </div>
                        <div className="clp-grid"> 
                            {cardUnit}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default CLP;
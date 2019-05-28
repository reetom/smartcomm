import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import landingbanner from '../../src/assets/banners/landingbanner3.jpg';
import CLPData from './../data/clp.json';
import BuildProductCard from './complibrary/buildproductcard';
import Pagination from './complibrary/pagination';

class CLP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            categoryName:"",
            exampleItems: [],
            pageOfItems: [],
       }
        // bind function in constructor instead of render
        this.onChangePage = this.onChangePage.bind(this);
    }
    //Pagination Stuff
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
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
        // set the filtered category products in state for pagination
        this.setState({exampleItems:filteredproducts});
    }

    render() {
        var {products} = this.state;
        //loop through every product in the array and build the card.
        const cardUnit = this.state.pageOfItems.map(product =>  <BuildProductCard productFromParent={product}/>)
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
                    </Cell>
                    <Cell col={5}>
                        <div>
                            Breadcrumbs come here @ToDo
                        </div>
                    </Cell>
                    <Cell col={7}>
                        <div className="text-right">
                            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                        </div>
                    </Cell>
                    <Cell col={12}>
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
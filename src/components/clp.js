import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import landingbanner from '../../src/assets/banners/landingbanner3.jpg';
import CLPData from './../data/clp.json';
import ProductCard from './complibrary/productcard';


class CLP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
       }
    }
    
    componentDidMount(){
        //Todo - replace with the clp url
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then (json => {
            this.setState({
                products: json,
                isLoaded: true,               
            })
        });
    
    }

    render() {

        var products = CLPData;//Fixture data, delete when connected to APIs and uncomment the next line
        //var {products} = this.state;
        //loop through every product in the array and build the card.
        const cardUnit = products.map(product =>  <ProductCard product={product}/>)
        console.log({cardUnit});
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
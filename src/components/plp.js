import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';
import PLPData from './../data/clp.json';
import landingbanner from '../../src/assets/banners/landingbanner5.jpg';
import bag2 from '../../src/assets/products/bag2.jpeg';
import ProductCard from './complibrary/productcard';


class PLP extends Component {
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
        
        var products = PLPData;//Fixture data, delete when connected to APIs and uncomment the next line
        //var {products} = this.state;
        console.log(PLPData);
        //loop through every product in the array and build the card.
        const cardUnit = products.map(product => <ProductCard product={product}/>)

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
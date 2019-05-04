import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import landingbanner from '../../src/assets/banners/landingbanner3.jpg';
import {Link} from 'react-router-dom';
import CLPData from './../data/clp.json';
import bag1 from '../../src/assets/products/bag1.jpeg';
import bag2 from '../../src/assets/products/bag2.jpeg';
import bag3 from '../../src/assets/products/bag3.jpeg';
import bag4 from '../../src/assets/products/bag4.jpeg';
import bag5 from '../../src/assets/products/bag5.jpeg';
import bag6 from '../../src/assets/products/bag6.jpeg';
import bag7 from '../../src/assets/products/bag7.jpeg';
import bag8 from '../../src/assets/products/bag8.jpeg';
import bag9 from '../../src/assets/products/bag9.jpg';
import bag10 from '../../src/assets/products/bag10.jpg';
import bag11 from '../../src/assets/products/bag11.jpeg';
import bag12 from '../../src/assets/products/bag12.jpg';


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
        console.log(CLPData);
        //loop through every product in the array and build the card.
        const cardUnit = products.map(product => 
                            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
                                <CardTitle style={{color: '#fff', height: '250px'}}>
                                <Link to="/pdp">
                                <img
                                src={bag1}
                                alt="bag1"
                                className="clp-card-image"
                                />
                                </Link>
                                </CardTitle>
                                <CardText>
                                    {product.name}
                                    ${product.price}
                                </CardText>
                                <CardMenu style={{color: 'RED'}}>
                                    <IconButton name="share" style={{color: 'Blue'}}/>
                                    <IconButton name="favorite" />
                                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                                </CardMenu>
                              </Card>
            )

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
                        <div className="clp-background"> 
                                {cardUnit}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default CLP;
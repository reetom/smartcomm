import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';
import bag1 from '../../../src/assets/products/bag1.jpeg';
function ProductCard ({product}){

    return(
        <div>
            <Card shadow={5} style={{minwidth: '200'}}>
                <CardTitle style={{color: '#fff', height: '250px'}}>
                <Link to="/pdp">
                <img
                src={bag1}
                alt="bag1"
                className="card-image"
                />
                </Link>
                </CardTitle>
                <CardText>
                    {product.productName} 
                    ${product.price}
                </CardText>
                <CardMenu style={{color: 'RED'}}>
                    <IconButton name="share" style={{color: 'Blue'}}/>
                    <IconButton name="favorite" />
                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                </CardMenu>
            </Card>
    </div>
    )
}
export default ProductCard;
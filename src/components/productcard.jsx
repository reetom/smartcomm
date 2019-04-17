import React, {Component} from 'react';
import {CardText,Card,CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';
import bag1 from '../../src/assets/products/bag1.jpeg';
class ProductCard extends Component {
    render() {
        return(
            <Card shadow={5} style={{minwidth: '200', margin: '1em'}}>
            <CardTitle style={{color: '#fff', height: '250px'}}>
            <img
            src={bag1}
            alt="bag1"
            className="clp-card-image"
            />
            </CardTitle>
            <CardText>
                Small Sylvie Leather Shoulder Bag
            </CardText>
            <CardMenu style={{color: 'RED'}}>
                <IconButton name="share" style={{color: 'Blue'}}/>
                <IconButton name="favorite" />
                <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
            </CardMenu>
          </Card>
        )
    }
}
export default ProductCard;
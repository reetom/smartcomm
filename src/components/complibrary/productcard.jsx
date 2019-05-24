import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';
import { join } from 'path';
function ProductCard ({product}){

    return(
        <div>
            <Card shadow={5} style={{minwidth: '200'}}>
                <CardTitle style={{color: '#fff', height: '250px'}}>
                <Link to={{
                    pathname: '/pdp',
                    state: {
                        productToDisplay: product
                    }
                    }}>
                <img
                src={product.imageURL}
                alt={product.imageName}
                className="card-image"
                />
                </Link>
                </CardTitle>
                <CardText>
                    {product.productName} 
                    <div>${product.price}</div>
                </CardText>
                <CardMenu style={{color: 'RED'}}>
                    <IconButton name="share" style={{color: 'Blue'}}/>
                    <IconButton name="favorite" onClick={() => addToFav({product})} />
                    <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                </CardMenu>
            </Card>
    </div>
    )
}

function addToFav({product}){
    //localStorage.removeItem("favList");
    var favList =[];
    //First check if the favList in local storate is empty, if not empty add to the list
    let favListFromLocalStoreage = JSON.parse(localStorage.getItem("favList"));
    if (favListFromLocalStoreage != null) {
        favListFromLocalStoreage.map(forEachProduct => favList.push(forEachProduct));
    } 
    favList.push(product);
    localStorage.setItem("favList",JSON.stringify(favList));
    console.log(favList);    

}
export default ProductCard;
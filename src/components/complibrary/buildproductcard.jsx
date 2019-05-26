import React, {Component} from 'react';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';

class BuildProductCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            //empty for now
        }
    }

    componentDidMount(){
    }

    render() {

        const product = this.props.productFromParent;
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
                        <IconButton name="share" style={{color: 'Blue'}} onClick={() => openSocialShare({product})}/>
                        <IconButton name="favorite" onClick={() => addToFav({product})} />
                        <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                    </CardMenu>
                </Card>
        </div>
        )

    }
}

function addToFav({product}){
    var favList =[];
    var favCount = 0;
    var favAlreadyExist = "false";
    //First check if the favList in local storate is empty, if not empty add to the list
    let favListFromLocalStoreage = JSON.parse(localStorage.getItem("favList"));
    if (favListFromLocalStoreage != null) {
        favListFromLocalStoreage.map(forEachProduct => {
            favList.push(forEachProduct); 
            favCount = favCount+1;
            //Check if the product already exist in the fav list
            if (favAlreadyExist === "false"){
                if(forEachProduct.productID === product.productID){
                    favAlreadyExist = "true"; console.log(favAlreadyExist);
                }
            }
        
        });
    } 
    //If the product doesn't exist in the fav list, add it to the fav list.
    if (favAlreadyExist == "false"){
        console.log("^^^^^^^^^^^^^^^");
        console.log(favAlreadyExist);
        favList.push(product);
        favCount = favCount +1;
    }
    localStorage.setItem("favList",JSON.stringify(favList));
    localStorage.setItem("favCount",JSON.stringify(favCount))
}

function openSocialShare(){

}
export default BuildProductCard;
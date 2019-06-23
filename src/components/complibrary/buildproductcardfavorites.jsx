import React, {Component} from 'react';
import {CardText,Card,CardTitle, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';

class BuildProductCardFavorites extends Component {

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
        var productNameEllipsis = product.productName.toString().substring(0,29) + "...";
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
                        {productNameEllipsis} 
                        <div>${product.price}</div>
                    </CardText>
                    <CardMenu style={{color: 'RED'}}>
                        <IconButton name="share" style={{color: 'Blue'}}/>
                        <IconButton name="delete" onClick={() => {  localStorage.setItem("itemToRemove", JSON.stringify(product));
                                                                    this.props.buildFavoriteCards.removeFromFav();
                                                                    }}/>
                        <IconButton name="shoppingcart" style={{color: 'Orange'}}/>
                    </CardMenu>
                </Card>
            </div>
        )
    }
}
export default BuildProductCardFavorites;
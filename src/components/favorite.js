import React, {Component} from 'react';
import ProductCardStretched from './complibrary/productcardstretched';
import {Grid, Cell, CardText,Card,CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import PDPData from '../../src/data/pdp.json'
class Favorite extends Component {
    
    render() {
        const cardUnitStretched =  <ProductCardStretched product={PDPData}/>
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "fav-landing-grid">
                    <Cell col={12}>
                        <div className="fav-grid"> 
                            {cardUnitStretched}
                        </div>
                    </Cell>
                </Grid>
            </div>
             
        )
    }
}
export default Favorite;
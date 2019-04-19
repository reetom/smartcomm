import React, {Component} from 'react';
import {Grid, Cell, Button, FABButton,Icon, Textfield} from 'react-mdl';
import bag1 from '../../src/assets/products/bag1.jpeg';
class PDP extends Component {
    render() {
        return(
            <Grid className = "pdp-grid">
            <Cell col={6}>
            <img src={bag1}
                alt="bag1"
                className="pdp-image"
            />
            </Cell>
            <Cell col={6}>
                <h1>Small Sylvie Leather Shoulder Bag</h1>
                <h3 className="price">$3550</h3>
                DETAILS & CARE
A glinting logo buckle taken from the archives, substantial chain trim and a floppy grosgrain bow in signature Web racing stripes add unmistakable branding to a sophisticated Italian handbag. The grosgrain shoulder strap and leather crossbody strap provide convenient carrying options, while the structured silhouette ensures that the covetable piece keeps its shape when you set it down.


Top buckle flap closure
Optional shoulder strap; optional, adjustable crossbody strap
Interior zip, wall and smartphone pockets
Sueded microfiber lining
Leather
Made in Italy
Designer Handbags
Item #5127084
<div className="pdp-button-div">
    <Textfield
        onChange={() => {}}
        label="Quantity"
        style={{width: '75px'}}
    />
    <FABButton class="pdp-button-round" colored ripple>
        <Icon name="add" />
    </FABButton>
    <FABButton class="pdp-button-round"colored ripple>
        <Icon name="remove" />
    </FABButton>
</div>
<div className="pdp-button-div1">
    <Button class="pdp-button" raised colored>Add to Cart</Button>
    <Button class="pdp-button" raised colored>Save for Later</Button>
</div>


            </Cell>
            </Grid>
        )
    }
}
export default PDP;
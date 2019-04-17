import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
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
                <h3>$3550</h3>
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

            </Cell>
            </Grid>
        )
    }
}
export default PDP;